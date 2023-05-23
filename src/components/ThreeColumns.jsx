// import ImgEcommerce from "../assets/img/TheRealWolf.png"
import Salvador from "../assets/img/Salvador.jpg"

const posts = [
  {
    id: 1,
    title: 'E-commerce Back-end application using MYSQL',
    href: 'https://github.com/EspinosaSalvador/E-commerce-Back-End-by-Salvador',
    description:
      'The need was to allow the user to write, save, update delete and create new information to the database through JS code, where the DB used was MySql <br /> I developed this repository. By utilizing Node.js, along with the assistance of dotenv for secure information management, sequelize for streamlined interaction with the terminal and prompt functionality, and mysql2 for seamless communication with the database. <br /> By demonstrating my adeptness in utilizing Node.js, dotenv, sequelize, and mysql2 in these projects, I have showcased my proficiency in building efficient and scalable web applications while also highlighting my ability to work with different technologies.',
    imageUrl: "https://blog.interfell.com/hubfs/MySQL%20un%20gestor%20de%20base%20de%20datos.jpg",
    date: 'May 1, 2023',
    datetime: '2023-05-01',
    author: {
      name: 'Salvador Espinosa',
      imageUrl: Salvador,
    },
  },
  {
    id: 2,
    title: 'Team profile Generator',
    href: 'https://github.com/EspinosaSalvador/Salvador-Team-profile-generator',
    description:
      'I created this repository to address the need for an easy and code-free method to add users and display their information in an HTML format. <br />To achieve this, I leveraged the power of Node.js, utilizing the Inquirer package for terminal prompts and the fs module to write and synchronize files with the information array. <br/>Additionally, I demonstrated my proficiency in utilizing tailwind for front-end development, showcasing my versatility in working with diverse technologies.',
    imageUrl:
      'https://github.com/EspinosaSalvador/Salvador-Team-profile-generator/blob/main/public/img/page-running.png?raw=true',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Salvador Espinosa',
      imageUrl:
        Salvador  ,
    },
  },
  {
    id: 3,
    title: 'Note Taker',
    href: 'https://github.com/EspinosaSalvador/Note-taker-Salvador',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://github.com/EspinosaSalvador/Note-taker-Salvador/blob/main/public/assets/img/App-running-in-heroku.png?raw=true',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    author: {
      name: 'Salvador Espinosa',
      imageUrl:
        Salvador,
    },
  },
  {
    id: 4,
    title: 'Boost your conversion rate',
    href: 'https://github.com/EspinosaSalvador/Note-taker-Salvador',
    description:
      'I developed a project to address the requirement of creating, saving, deleting, and editing notes with titles and text.  To achieve this, I utilized Node.js, Express, and the fs module, showcasing my expertise in back-end development. Additionally, I successfully deployed the project on Heroku.  demonstrating my ability to integrate and synchronize the database with a cloud platform for seamless deployment. By showcasing my proficiency in utilizing Node.js, Express, fs, and Heroku in this project, I have proven my capability to build robust and deployable applications while highlighting my skills in working with databases and cloud platforms.',
    imageUrl:
      'https://github.com/EspinosaSalvador/Note-taker-Salvador/blob/main/public/assets/img/App-running-in-heroku.png?raw=true',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    author: {
      name: 'Salvador Espinosa',
      imageUrl:
        Salvador,
    },
  },
  {
    id: 5,
    title: 'Boost your conversion rate',
    href: 'https://github.com/EspinosaSalvador/Note-taker-Salvador',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://github.com/EspinosaSalvador/Note-taker-Salvador/blob/main/public/assets/img/App-running-in-heroku.png?raw=true',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    author: {
      name: 'Salvador Espinosa',
      imageUrl:
        Salvador,
    },
  },
  {
    id: 6,
    title: 'Boost your conversion rate',
    href: 'https://github.com/EspinosaSalvador/Note-taker-Salvador',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://github.com/EspinosaSalvador/Note-taker-Salvador/blob/main/public/assets/img/App-running-in-heroku.png?raw=true',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    author: {
      name: 'Salvador Espinosa',
      imageUrl:
        Salvador,
    },
  },
  // More posts...
]

export default function ThreeColumns() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img src={post.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                    {post.author.name}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
