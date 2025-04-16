import './index.css'
import ProdutIteration from './image/product-iteration.svg'
import Interview from './image/interview.svg'
import Documents from './image/documents.svg'
import Logistics from './image/logistics.svg'
import Scheduler from './image/schedule.svg'
import Form from './image/form.svg'
import Technology from './image/technology.svg'
import PrintFedd from './image/prt.jpg'
import { Carousel } from './components/Carousel'

function App() {
  return (
    <div className="App w-full gap-10 items-center justify-between text-black bg-white">
      <div className="bg-blue-50 text-gray-800 font-sans">

        <section className="bg-blue-100 text-center bg-cover bg-center relative pb-16 px-6 text-white bg-[url('./image/vupy.png')]">
          <div className="absolute bg-indigo-200 bg-opacity-10 z-0"></div>

          <p className='text-xl text-start py-6'>
            <span className='font-medium text-1xl text-zinc-200'>vupt</span> | <span className='font-thin'>Tecnologia</span>
          </p>

          <div className='flex items-center justify-center gap-28 py-8'>
            <div>
              <h1 className="text-5xl font-bold text-white mb-4 text-center space-y-6">
                Organize a sua <span className=''>gestão</span> <p>de forma <span className='bg-blue-700 font-bold rounded px-2 bg-opacity-70'>simples e eficiente</span></p>
              </h1>
            </div>

          </div>

          <div className='py-4'>
            <p className="text-2xl mb-10 text-white">
              Mais controle, menos trabalho: centralize clientes, orçamentos, estoque e agenda <p>para aumentar sua produtividade e focar no que realmente importa.</p>
            </p>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-2xl shadow hover:bg-indigo-800 transition">
              Quero uma demonstração gratuita 🚀
            </button>
          </div>
        </section>

        <section className="py-28 px-6 ">
          <div className='flex justify-center pb-28 gap-32'>
            <div className='flex justify-center w-10/12 max-w-6xl text-center items-center gap-36 bg-white rounded-2xl p-10 shadow-sm'>
              <h2 className="text-5xl font-extrabold text-zync-700 tracking-tight text-start">
                COMO IREMOS <br />TE AJUDAR?
              </h2>
              <img src={ProdutIteration} className='h-56 -mt-16' />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-center text-center">
            {[
              {
                icon: <img src={Interview} className='h-28 -mt-16' />,
                title: <span className='font-semibold text-xl text-indigo-700'>Gestão de Clientes</span>,
                text: <p className='font-normal text-start px-4 text-2xl'>
                  Seus <span className='bg-indigo-700 font-thinn rounded px-1 text-white font-semibold'>clientes</span> organizados e sempre à mão para uma
                  <span className='font-bold text-indigo-700'> gestão eficiente e estratégica.
                  </span>
                </p>
              },
              {
                icon: <img src={Documents} className='h-28 -mt-16' />,
                title: <span className='font-semibold text-xl text-indigo-700'>Orçamentos</span>,
                text: <p className='font-normal text-start px-4 text-2xl'>
                  Transforme seu processo de <span className='bg-indigo-700 font-thinn rounded px-2 text-white font-semibold'>orçamentos</span> em uma <span className='font-bold text-indigo-700'>experiência simples e eficaz.</span>
                </p>
              },
              {
                icon: <img src={Logistics} className='h-28 -mt-16' />,
                title: <span className='font-semibold text-xl text-indigo-700'>Estoque</span>,
                text: <p className='font-normal text-start px-4 text-2xl'>
                  Reduza perdas e aumente a <span className='font-bold text-indigo-700'>eficiência com o <span className='bg-indigo-700 font-semibold rounded px-2 text-white'>controle</span> de entradas e saídas.</span>
                </p>
              },
              {
                icon: <img src={Scheduler} className='h-28 -mt-16' />,
                title: <span className='font-semibold text-xl text-indigo-700'>Agenda</span>,
                text: <p className='font-normal text-start px-4 text-2xl'>
                  Otimize sua <span className='font-bold text-indigo-700'>produtividade com <span className='bg-indigo-700 font-semibold rounded px-2 text-white'>agendamentos</span> rápidos</span> e lembretes precisos.
                </p>
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-10 rounded-2xl shadow text-center flex flex-col gap-6 h-[490px]">
                <div className="text-4xl mb-3 flex justify-center">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-indigo-700">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Depoimentos */}
        <section className="bg-white py-16 px-6 border-t">

          <h2 className="text-xl font-thin text-center mb-6 text-zinc-700">
            Depoimentos
          </h2>
          <p className='text-center text-2xl font-bold text-zinc-600'>
            Clientes que Viram Resultados
          </p>

          <div className='flex flex-row py-16 px-52 h-2/6'>
            <Carousel />
          </div>

        </section>

        {/* Formulário */}
        <section className="flex py-16 px-6 items-center justify-center gap-10 bg-blue-100 text-center">
          <img src={Form} className='h-52' />
          <div>
            <p className="mb-6 font-semibold text-zinc-800 text-xl">Solicite uma demonstração gratuita agora mesmo:</p>
            <form className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full p-3 rounded-xl border border-gray-300"
              />
              <input
                type="text"
                placeholder="E-mail ou telefone"
                className="w-full p-3 rounded-xl border border-gray-300"
              />
              <button className="w-full bg-blue-700 text-white px-6 py-3 rounded-2xl shadow hover:bg-indigo-700 transition">
                Quero uma demonstração gratuita
              </button>
            </form>
          </div>
        </section>

        {/* Rodapé */}
        <footer className="bg-blue-50 text-center px-6 py-16 border-t text-sm">
          <p className='text-xl text-start py-6'>
            <span className='font-medium text-1xl text-zinc-800'>vupt</span> | <span className='font-thin'>Tecnologia</span>
          </p>
          <p className='text-start'>
            © {new Date().getFullYear()} Vupt Tecnologia. Todos os direitos reservados
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
