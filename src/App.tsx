import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

function App() {
  return (
    <div className='absolute top-0 left-0 w-full h-[1700px]'>
      {/* Header */}
      <Header />

      <section className='flex h-full w-full'>
        {/* Sidebar */}
        <div className='hidden md:flex flex-col w-[100px] border-r-[1px] border-white/30 h-full '>
          <h1 className='font-thin text-xs md:text-sm'>Sidebar</h1>
        </div>

        {/* Main */}
        <div className='flex justify-start w-full xl:mr-16 xl:ml-16 mt-8 mr-8 ml-8'>
          <Main />
        </div>
      </section>

      {/* PlaybackBar */}
    </div>
  )
}

export default App
