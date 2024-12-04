import React ,{ useState } from 'react'

export default function MainPage() {

  //states for the form fields

  const [date, setDate ] = useState(null);
  const [sourceCurrency, setSourceCurrency]= useState("");
  const [targetCurrency, setTargetCurrency]= useState("");
  const [ammountInSourceCurrency, setAmmountInSourceCurrency]= useState(0);
  const [ammountInTargetCurrency, setAmmountInTargetCurrency]= useState(0);


  return (
    <div>
    <h1 className=' lg:mx-32 text-5xl font-bold text-green-500' >Convert Your Courency Today</h1>
    <p className='lg:mx-32 opacity-40 py-6'>Welcome to Convert Your Courency Today! This application allows to easily convert curencies based on the latest exchange rates.
        Whether you are planing a trip, managing your finances, or simply curious about the value of your money in different currencies, this tool is here to help.
    </p>


    <div className='mt-5 flex items-center justify-center flex-col'>
        <section className='w-full lg:w-1/2'>
            <form>
       <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                <label for="{date}" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                <input type="Date" id="{date}" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
             </div>
      </div>

      <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                <label for="{sourceCurrency}"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                <select id='{sourceCurrency}' className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'>
                 
                <option value="">Select Source Currency</option>
                </select>
             </div>
      </div>


      <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                <label for="{targetCurrency}"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                <select id="{targetCurrency}" className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'>
                 
                <option value="">Select Target Currency</option>
                </select>
             </div>
      </div>


       <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                <label for="ammountInSourceCurrency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ammount In Source Currency</label>
                <input type="number" id="ammountInTargetCurrency" value="ammountInTargetCurrency" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ammount in source currency" required />
             </div>
      </div>

      <button className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md'>Get The Target Currency</button>
            </form>
        </section>

    </div>


    

      

    </div>
    

    
  )
}
