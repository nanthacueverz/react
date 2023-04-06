import React from 'react'
import Counter from '../../components/counter';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { GiCardRandom , GiVote } from 'react-icons/gi';
import { HiDocumentDuplicate } from 'react-icons/hi';
import { AiFillPrinter } from 'react-icons/ai';
import { FaWallet , FaEquals} from 'react-icons/fa';
import { FcApproval , FcCancel } from 'react-icons/fc';
const profile = () => {
  return (
    <div className="justify-center w-full">
        <div className="bg-primary dark:bg-primary shadow rounded w-full">
            <div className="px-5 xl:px-10 pb-5 w-full">
                <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between w-full">
                    <div className="xl:pr-16 w-full xl:w-2/3">
                        <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                            <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-white dark:text-white font-medium tracking-normal"><FaWallet /></h2>
                            <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-white dark:text-white font-medium tracking-normal">0x9768......4237</h2>
                            <div className="text-sm bg-gold dark:bg-gold text-white px-5 py-1 font-normal rounded-full">ADMIN</div>
                        </div>
                        <div className=''>
                        <p className="text-white xl:text-left mt-2 text-sm tracking-normal  leading-5">Tokens : <span className='font-bold text-white'>POWER</span> </p>
                        <p className="text-white xl:text-left mt-2 text-sm tracking-normal  leading-5">Power : <span>80%</span></p>
                        </div>
                    </div>
                    <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3">
                        <div className="mr-6 xl:mr-10">
                            <p className="text-white dark:text-white text-sm xl:text-xl leading-5"><GiCardRandom className='m-auto'/>NFTS</p>
                            <h2 className="text-white dark:text-white font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">12</h2>
                        </div>
                        <div className="mr-6 xl:mr-10">
                            <p className="text-white dark:text-white text-sm xl:text-xl leading-5"><HiDocumentDuplicate className='m-auto'/>SERIES</p>
                            <h2 className="text-white dark:text-white font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">4</h2>
                        </div>
                        <div>
                            <p className="text-white dark:text-white text-sm xl:text-xl leading-5"><AiFillPrinter className='m-auto'/>PRINTED</p>
                            <h2 className="text-white dark:text-white font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">4</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center w-full justify-between py-2">
                <div className="w-full rounded shadow bg-white dark:bg-primary py-6 pl-6 pr-12">
                    <div className="flex items-center justify-between">
                        <p className="text-lg md:pr-96 font-semibold leading-4 text-gray-800 dark:text-gray-100">Statistics</p>
                        <p className="text-xs leading-3 pl-6 text-right text-gray-500 dark:text-gray-400">Updated 1 month ago</p>
                    </div>
                    <div className="md:flex items-center justify-between pt-8">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                                <GiVote className='h-7 w-7 text-primary'/>
                            </div>
                            <div className="pl-4 text-center">
                                <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">10</p>
                                <p className="w-100 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">Total Vote Contract</p>
                            </div>
                        </div>
                        <div className="flex items-center md:pt-0 pt-4 md:pl-10">
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                                <FcApproval  className='h-7 w-7'/>
                            </div>
                            <div className="pl-4 text-center">
                                <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">5</p>
                                <p className="w-10 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">Approve</p>
                            </div>
                        </div>
                        <div className="flex items-center md:pt-0 pt-4 md:pl-10">
                            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                                <FcCancel  className='h-7 w-7'/>
                            </div>
                            <div className="pl-4 text-center">
                                <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">3</p>
                                <p className="w-100 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">Against</p>
                            </div>
                        </div>
                        <div className="flex items-center md:pt-0 pt-4 md:pl-10">
                            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                                <FaEquals  className='h-7 w-7'/>
                            </div>
                            <div className="pl-4 text-center">
                                <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">2</p>
                                <p className="w-100 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">Abstain</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className='bg-primary w-full p-4'>
            <h1 className='text-[20px] text-white'>Active Proposals</h1>
            <div className="grid grid-cols-3 gap-4 mt-5">
                <div className='bg-white text-primary text-center rounded shadow-md'>
                    <h2 className='font-bold text-primary text-[16px] pt-2'>Need to Develop Theos</h2>
                    <form className='text-primary font-medium py-2 w-full vote_contract flex px-5'>
                        <div className='text-primary font-bold text-[14px]'><input type="radio" name="fruit" value="apple"/>Against</div>
                        <div className='text-primary font-bold text-[14px]'><input type="radio" name="fruit" value="orange" className='text-primary '/>For</div>
                        <div className='text-primary font-bold text-[14px]'><input type="radio" name="fruit" value="melon" className=''/>Abstain</div>
                    </form>
                </div>
                <div className='bg-white text-primary text-center rounded shadow-md'>
                    <h2 className='font-bold text-primary text-[16px] pt-2'>Increase a card Price</h2>
                    <form className='text-primary font-medium py-2 w-full vote_contract flex px-5'>
                        <div className='text-primary font-bold text-[14px]'><input type="radio" name="fruit" value="apple"/>Against</div>
                        <div className='text-primary font-bold text-[14px]'><input type="radio" name="fruit" value="orange" className='text-primary '/>For</div>
                        <div className='text-primary font-bold text-[14px]'><input type="radio" name="fruit" value="melon" className=''/>Abstain</div>
                    </form>
                </div>
                <div className='bg-white text-primary text-center rounded shadow-md '>
                    <h2 className='font-bold text-primary text-[16px] pt-2'>Change Admin</h2>
                    <form className='text-primary font-medium py-2 w-full vote_contract flex px-5'>
                        <div className='text-primary font-bold text-[14px]'><input type="radio" name="fruit" value="apple"/>Against</div>
                        <div className='text-primary font-bold text-[14px]'><input type="radio" name="fruit" value="orange" className='text-primary '/>For</div>
                        <div className='text-primary font-bold text-[14px]'><input type="radio" name="fruit" value="melon" className=''/>Abstain</div>
                    </form>
                </div>
            </div>
          <div className='text-white justify-center w-full text-center mt-5'>
            <button className='text-white py-2 w-96 bg-gold rounded font-bold'>SUBMIT VOTES</button>
          </div>
        </div>
        <div className='bg-primary mt-3'>
            <h1 className='text-white text-[20px] font-bold'>Payment Deatil</h1>
            <div className="flex">
                {/* <div className='product_count col-span-2 w-100'>
                    <div className='bg-white text-primary flex rounded'>
                        <div className='cart_inner_popup w-128 h-10'>
                            <picture>
                                <img
                                    src="https://source.unsplash.com/bYuI23mnmDQ"
                                    alt="Landscape picture"
                                    width={150}
                                    height={10}
                                />
                            </picture>
                        </div>
                        <div className=''>
                            <h1>StreetWalker</h1>
                            <p>Price : <span className='font-bold text-primary'>$10/1</span></p>
                        </div>
                        <div className="flex justify-between pt-2">
                            <div><Counter /></div>
                            <div> 
                                <button className="bg-gold hover:bg-primary text-white font-bold py-2 px-2 rounded border border-white">
                                    <AiOutlineShoppingCart />
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="flex flex-col justify-center">
                    <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                        <div className="w-full md:w-1/3 bg-white grid place-items-center">
                           <picture>
                           <img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="tailwind logo" className="rounded-xl" />
                           </picture>
                        </div>
                        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                            <div className="flex justify-between item-center">
                                <p className="text-gray-500 font-medium hidden md:block">Vacations</p>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <p className="text-gray-600 font-bold text-sm ml-1">
                                        4.96
                                        <span className="text-gray-500 font-normal">(76 reviews)</span>
                                    </p>
                                </div>
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                    Superhost</div>
                            </div>
                            <h3 className="font-black text-gray-800 md:text-3xl text-xl">The Majestic and Wonderful Bahamas</h3>
                            <p className="text-xl font-black text-gray-800">
                                $110
                                <span className="font-normal text-gray-600 text-base">/1</span>
                            </p>
                        </div>
                    </div>
	            </div>
                <div className='bg-white py-5 mt-5 mr-2 rounded w-100'>
                    <Tabs>
                        <TabList className='flex  bg-neutral-300 bg-opacity-50 rounded-lg p-1 relative z-0 mx-5'>
                            <Tab className=' text-white font-medium text-[14px] grid place-items-center text-center w-full h-full relative bg-transparent p-1 text-blue-gray-900 antialiased font-sans text-base leading-relaxed select-none cursor-pointer'>Pay with Card</Tab>
                            <Tab className=' text-white font-medium text-[14px] grid place-items-center text-center w-full h-full relative bg-transparent p-1 text-blue-gray-900 antialiased font-sans text-base leading-relaxed select-none cursor-pointer'>Pay with PayPal</Tab>
                        </TabList>
                        <TabPanel className='leading-relaxed payment_tabs'>
                            <form className='pt-5 mx-4'>
                                <div>
                                    <h1 className='text-primary text-[14px] font-medium pb-3'>PERSIONAL DETAIL</h1>
                                </div>
                                <div className="relative w-full  h-10 mb-2">
                                    <input className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500" placeholder=" " />
                                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">Email Address</label>
                                </div>
                                <div>
                                    <h1 className='text-primary text-[14px] font-medium pb-3'>CARD DETAIL</h1>
                                </div>
                                <div className="relative w-full h-10 mb-2">
                                    <input className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500" placeholder=" " />
                                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">Holder Name</label>
                                </div>
                                <div className="relative w-full  h-10 mb-2">
                                    <div className="grid place-items-center absolute text-blue-gray-500 top-2/4 right-3 -translate-y-2/4 w-5 h-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-blue-gray-300">
                                            <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z"></path>
                                            <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-blue-500" placeholder=" " value="" />
                                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">Card </label>
                                </div>
                                <div className="my-4 flex items-center gap-4 mb-2">
                                    <div className="relative w-full  h-10 ">
                                        <input  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500" placeholder=" " value="" />
                                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">Expires</label>
                                    </div>
                                    <div className="relative w-full h-10 ">
                                        <input className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500" placeholder=" " />
                                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">CVC</label>
                                    </div>
                                </div>
                                <div className='w-full mt-3'>
                                    <button className='bg-primary rounded h-10 text-[16px] text-white font-bold w-full'>PAY NOW</button>
                                </div>
                            </form>
                        </TabPanel>
                        <TabPanel className='leading-relaxed payment_tabs w-full'>
                            <form className='pt-5 mx-4 w-100'>
                                <div>
                                    <h1 className='text-primary text-[14px] font-medium pb-3'>PERSIONAL DETAIL</h1>
                                </div>
                                <div className="relative w-full  h-10 mb-2">
                                    <input className="pappall_input peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500" placeholder=" " />
                                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">Email Address</label>
                                </div>
                                <div>
                                    <h1 className='text-primary text-[14px] font-medium pb-3'>PERSIONAL DETAIL</h1>
                                </div>
                                <div className="relative w-full  h-10 mb-2">
                                    <input className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500" placeholder=" " />
                                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">Email</label>
                                </div>
                                <div className="relative w-full h-10 mb-2">
                                    <input className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500" placeholder=" " />
                                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">PASSWORD</label>
                                </div>
                                <div className='w-full mt-3'>
                                    <button className='bg-primary rounded h-10 text-[16px] text-white font-bold w-full'>
                                        PayPal
                                    </button>
                                </div>
                            </form>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default profile
