import yayJpg from '../assets/yay.jpg';
import importHTML from 'import-html-entry';
import React, { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    importHTML('/home')
      .then(res => {
        console.log(res);

        // res.execScripts().then(exports => {
        //     const mobx = exports;
        //     const { observable } = mobx;
        //     observable({
        //         name: 'kuitos'
        //     })	
        // })
    });
  }, [])
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
