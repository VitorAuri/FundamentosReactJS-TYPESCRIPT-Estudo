/*COMPONENTS*/
import { Post, PostType } from './components/Post.jsx'
import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'

/*CSS*/ 
import styles from './components/css/App.module.css'
import './components/css/Global.module.css'

const posts: PostType[] =[
  {
    id: 1,
    author: {
      avatarUrl: "https://i.pinimg.com/564x/b2/8b/d1/b28bd157a332be5dcbfaa016c9427ef4.jpg",
      name: 'Roberto Carlos',
      role: 'Dev Full Stack',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2014/03/formacao_1600x1200-masculinidade-entenda-o-que-e-ser-um-homem-de-verdade.jpg",
      name: 'Frederico Alberto',
      role: 'Dev Front-End',
    },
    content: [
      {type: 'paragraph', content: 'Eaeeeee galeraa 👋'},
      {type: 'paragraph', content: ' Tudo tranquilo?!?!?!'},
      {type: 'link', content: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
          <Sidebar />
        <main>
          {posts.map(post =>{
            return(
              <Post 
                key={post.id}
                post={post}
               />
            )
          })}
        </main>
      </div>
    </div>
  )
}
