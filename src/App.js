import React, { useState, useEffect } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { API } from 'aws-amplify';
import { listHackdays } from './graphql/queries';
import { createHackday, deleteHackday } from './graphql/mutations';

const initialFormState = { text: '', slack_channel: '' }

function App() {
  const [lists, setLists] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    const getList = async () => {
      const apiData = await API.graphql({ query: listHackdays });
      setLists(apiData.data.listHackdays.items);
    }
    getList();
  }, []);
  console.log(formData)

  const createItem = async () => {
    if (!formData.text || !formData.slack_channel) return;
    const ret = await API.graphql({ query: createHackday, variables: { input: formData } });
    console.log(ret)
    const data = {
      id: ret.data.createHackday.id,
      text: ret.data.createHackday.text,
      slack_channel: ret.data.createHackday.slack_channel,
    }
    setLists([ ...lists, data ]);
    setFormData(initialFormState);
  }

  const deleteItem = async ({ id }) => {
    const newItemsArray = lists.filter(item => item.id !== id);
    setLists(newItemsArray);
    await API.graphql({ query: deleteHackday, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>アナウンス一覧</h1>
      <input
        onChange={e => setFormData({ ...formData, 'text': e.target.value})}
        placeholder="投稿文"
        value={formData.text}
      />
      <input
        onChange={e => setFormData({ ...formData, 'slack_channel': e.target.value})}
        placeholder="投稿チャンネル"
        value={formData.slack_channel}
      />
      <button onClick={createItem}>登録</button>
      <div style={{marginBottom: 30}}>
        {
          lists.map(item => (
            <div key={item.id}>
              <p>{item.text}</p>
              <p>{item.slack_channel}</p>
              <button onClick={() => deleteItem(item)}>削除</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
