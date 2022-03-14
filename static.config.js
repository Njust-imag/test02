import path from 'path'
import axios from 'axios'
import { useState } from 'react'

export default {
  getRoutes: async () => {

    // const { data: news } = await axios.get(
    //   'http://127.0.0.1:5000/home/news'
    // )

    // const { data: people } = await axios.get(
    //   'http://127.0.0.1:5000/home/people'
    // )

    const { data: conference } = await axios.get(
      'http://127.0.0.1:5000/conference'
    )

    // const { data: journal } = await axios.get(
    //   'http://127.0.0.1:5000/home/journal'
    // )

    // const { data: patent } = await axios.get(
    //   'http://127.0.0.1:5000/home/patent'
    // )

    // const { data: monograph } = await axios.get(
    //   'http://127.0.0.1:5000/home/monograph'
    // )

    // const { data: softwareCopyright } = await axios.get(
    //   'http://127.0.0.1:5000/home/softwareCopyright'
    // )

    // const { data: grants } = await axios.post(
    //   'http://127.0.0.1:5000/home/project', 
    // )


    // const { data: image } = await axios.post(
    //   'http://127.0.0.1:5000/home/avatar', 
    //   {
    //     header: {
    //       'Content-Type':'application/json' 
    //     },
    //     path: './users/static/avatar/000001.jpg'
    //   }
    // )

    // const userPage = [];

    // const ids = [1, 2, 3];

    // for(let i = 0; i < ids.length; ++ i){
    //   const { data: resp } = await axios.post(
    //     'http://127.0.0.1:5000/home/userPage/' + ids[i], 
    //   )
    //   userPage.push({'id': ids[i], 'info': resp});
    // }


    return [
      // {
      //   path: '/people',
      //   getData: () => ({
      //     people,
      //     image
      //   }),
      //   children: userPage.map(userInfo => ({
      //     path: `/user/${userInfo.id}`,
      //     template: 'src/containers/User',
      //     getData: () => ({
      //       image,
      //       userInfo
      //     })
      //   }))
      // },
      // {
      //   path: '/news',
      //   getData: () => ({
      //     news
      //   }),
      // },
      {
        path: '/conference',
        getData: () => ({
          conference,
        }),
      },
    //  
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    require.resolve('react-static-plugin-react-router'),
  ],
}
