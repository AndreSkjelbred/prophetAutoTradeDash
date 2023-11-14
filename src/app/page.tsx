"use client";
import Image from "next/image";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

import TelegramButton from "../shared/TelegramButton/TelegramButton";
import SquigglyBG from "@/components/squigglyBG/squigglyBG";

export default function Home() {
  const [tgOauthCode, setTgOauthCode] = useState({ id: "", username: "" });

  const handleTelegramResponse = useCallback((response: any) => {
    setTgOauthCode(response);
  }, []);

  return (
    <div className=''>
      <SquigglyBG />
      <div className='sticky top-0 flex h-20 shrink-0 items-center bg-project-primary-darker md:px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 z-40  '>
        <button type='button' className='p-2.5 text-gray-400 lg:hidden'>
          <span className='sr-only'>Open sidebar</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            aria-hidden='true'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>
        <img
          className='h-12 sm:h-18 w-auto block md:hidden'
          src='/assets/logo-dc3088bf.svg'
          alt='Prophet Logo'
        />
        <span className='hidden md:block text-xl md:text-2xl font-bold text-gray-200'>
          AutoSniper Trades
        </span>

        <div className='h-6 w-px bg-gray-900/10 lg:hidden' aria-hidden='true' />
        <div
          className='focus:outline-none text-gray-900 bg-project-primary cursor-pointer rounded-3xl px-6 py-2.5 text-sm font-medium border border-project-primary transition-all select-none focus:ring-project-primary  ml-auto '
          id='headlessui-radiogroup-option-3'
          role='radio'
          aria-checked='true'
          tabIndex={0}
          aria-labelledby='headlessui-label-4'
        >
          <span id='headlessui-label-4'>Logout</span>
        </div>
      </div>
      <div className='fixed top-0 w-full left-20 z-30 h-32 bg-gradient-to-t from-gray-900/0 to-gray-900' />
      <main className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-gray-900 text-gray-200'>
        <div className='relative isolate overflow-hidden'>
          <header className='mt-4 pb-4'>
            <div className='mx-4'>
              <div className='flex text-xl md:text-3xl font-bold text-gray-200'>
                {" "}
                Login with Telegram to access this page{" "}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                  className='w-8 h-8 ml-4 text-custom-green'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z'
                  />
                </svg>
              </div>
            </div>
            <div className='mt-10 mx-4 flex max-w-7xl flex-wrap items-center gap-6 sm:flex-nowrap'>
              <div className='telegram-widget-login-btn'>
                <TelegramButton onResponse={handleTelegramResponse} />
                {!!tgOauthCode?.id && (
                  <span className='logout'>
                    Want to switch account? Use the &quot;Terminate
                    session&quot; button sent to you on Telegram by the Official
                    Telegram Account.
                  </span>
                )}
                {/*<TelegramLoginButton
                                        data-auth-url={config.TG_DATA_AUTH_URL}
                                        dataOnauth={handleTelegramResponse}
                                        botName={config.TG_BOT_NAME}
                                        requestAccess='write'
                                    />*/}
              </div>
            </div>
            <div className='mt-10 mx-4 flex flex-col items-start lg:flex-row max-w-7xl flex-wrap lg:items-center gap-6 lg:flex-nowrap'>
              <h1 className='text-lg font-semibold leading-7'>Channels</h1>
              <div className='flex'>
                <div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-400 bg-project-primary-darker border border-project-primary transition-all select-none cursor-pointer hover:bg-project-primary/25'>
                  <span className='flex ml-2'>
                    <img
                      src='/moneymode.png'
                      alt='channel-label-icon'
                      className='w-6 h-6'
                    />
                    <span className='ml-1 mr-2'>Money Mode</span>
                  </span>
                </div>
              </div>
              <div className='flex'>
                <div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-400 bg-project-primary-darker border border-project-primary transition-all select-none cursor-pointer hover:bg-project-primary/25'>
                  <span className='flex ml-2'>
                    <img
                      src='/godrisk.png'
                      alt='channel-label-icon'
                      className='w-6 h-6'
                    />
                    <span className='ml-1 mr-2'>Godmode Risk</span>
                  </span>
                </div>
              </div>
              <div className='flex'>
                <div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-400 bg-project-primary-darker border border-project-primary transition-all select-none cursor-pointer hover:bg-project-primary/25'>
                  <span className='flex ml-2'>
                    <img
                      src='/godpro.png'
                      alt='channel-label-icon'
                      className='w-6 h-6'
                    />
                    <span className='ml-1 mr-2'>Godmode Pro</span>
                  </span>
                </div>
              </div>
              <div className='flex'>
                <div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-400 bg-project-primary-darker border border-project-primary transition-all select-none cursor-pointer hover:bg-project-primary/25'>
                  <span className='flex ml-2'>
                    <img
                      src='/godexp.png'
                      alt='channel-label-icon'
                      className='w-6 h-6'
                    />
                    <span className='ml-1 mr-2'>Godmode Expert</span>
                  </span>
                </div>
              </div>
            </div>
          </header>
          <div>
            <div className='relative'>
              <div
                className='mt-6 inset-0 flex items-center'
                aria-hidden='true'
              >
                <div className='w-full border-t border-project-primary/70' />
              </div>
              <div className='relative flex justify-start'>
                <h1 className='mt-8 ml-4 text-3xl font-semibold leading-7'>
                  Statistics
                </h1>
              </div>
            </div>
            <dl className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
              <div className='rounded-3xl border-[0.5px] py-5 sm:py-3 px-3 shadow-default border-project-primary bg-project-primary-darkest pb-10'>
                <div className='flex items-end justify-between ml-1'>
                  <div>
                    <span className='text-xl font-bold text-gray-400'>
                      Total Signals
                    </span>
                    <h4 className='mt-6 text-[42px] font-bold text-custom-green'>
                      0
                    </h4>
                    {/**/}
                  </div>
                </div>
              </div>
              <div className='rounded-3xl border-[0.5px] py-5 sm:py-3 px-3 shadow-default border-project-primary bg-project-primary-darkest pb-10'>
                <div className='flex items-end justify-between ml-1'>
                  <div>
                    <span className='text-xl font-bold text-gray-400'>
                      Average Profit
                    </span>
                    <h4 className='mt-6 text-[42px] font-bold text-custom-green'>
                      0 %
                    </h4>
                    {/**/}
                  </div>
                </div>
              </div>
              <div className='rounded-3xl border-[0.5px] py-5 sm:py-3 px-3 shadow-default border-project-primary bg-project-primary-darkest pb-10'>
                <div className='flex items-end justify-between ml-1'>
                  <div>
                    <span className='text-xl font-bold text-gray-400'>
                      Success Ratio
                    </span>
                    <h4 className='mt-6 text-[42px] font-bold text-custom-green'>
                      0 %
                    </h4>
                    {/**/}
                  </div>
                </div>
              </div>
              <div className='rounded-3xl border-[0.5px] py-3 px-3 shadow-default border-project-primary bg-project-primary-darkest'>
                <div className='flex flex-col ml-1'>
                  <div className=''>
                    <span className='text-xl font-bold text-gray-400'>
                      Average Initial Market Cap
                    </span>
                    <h4 className='mt-1 text-[24px] font-bold text-custom-green'>
                      $0
                    </h4>
                  </div>
                  <div className='mt-4'>
                    <span className='text-xl font-bold text-gray-400'>
                      Average ATH Market Cap
                    </span>
                    <h4 className='mt-1 text-[24px] font-bold text-custom-green'>
                      $0
                    </h4>
                  </div>
                </div>
              </div>
            </dl>
            <dl className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
              <div className='rounded-3xl border-[0.5px] py-3 px-3 shadow-default border-project-primary bg-project-primary-darkest col-span-4'>
                <div
                  id='channels-tooltip'
                  className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-300 transition-opacity delay-500 duration-300 bg-project-primary-darker rounded-lg shadow-sm opacity-0 tooltip'
                  role='tooltip'
                  data-popper-placement='right'
                  data-popper-reference-hidden
                  data-popper-escaped
                  style={{
                    position: "absolute",
                    inset: "0px auto auto 0px",
                    margin: "0px",
                    transform: "translate3d(108px, 821.6px, 0px)",
                  }}
                >
                  <div id='channels-tooltip'>
                    <div className='flex flex-col items-start justify-center'>
                      <span className='text-sm'>Channels:</span>
                      <p className='flex mt-2'>
                        <img
                          src='/moneymode.png'
                          alt='channel-label-icon'
                          className='w-5 h-5'
                        />
                        <span className='ml-2'>Money Mode</span>
                      </p>
                      <p className='flex mt-2'>
                        <img
                          src='/godrisk.png'
                          alt='channel-label-icon'
                          className='w-5 h-5'
                        />
                        <span className='ml-2'>Godmode Risk</span>
                      </p>
                      <p className='flex mt-2'>
                        <img
                          src='/godpro.png'
                          alt='channel-label-icon'
                          className='w-5 h-5 mt-px'
                        />
                        <span className='ml-2'>Godmode Pro</span>
                      </p>
                      <p className='flex mt-2'>
                        <img
                          src='/godexp.png'
                          alt='channel-label-icon'
                          className='w-5 h-5'
                        />
                        <span className='ml-2'>Godmode Expert</span>
                      </p>
                    </div>
                  </div>
                  <div
                    className='tooltip-arrow'
                    data-popper-arrow
                    style={{
                      position: "absolute",
                      top: "0px",
                      transform: "translate3d(0px, 140.8px, 0px)",
                    }}
                  />
                </div>
                <div
                  id='simulation-tooltip'
                  className='absolute z-10 inline-block px-3 py-2 text-sm font-medium text-gray-300 transition-opacity delay-500 duration-300 bg-project-primary-darker rounded-lg shadow-sm tooltip opacity-0 invisible'
                  role='tooltip'
                  data-popper-placement='right'
                  style={{
                    position: "absolute",
                    inset: "0px auto auto 0px",
                    margin: "0px",
                    transform: "translate3d(1028px, 576.8px, 0px)",
                  }}
                >
                  <div id='simulation-tooltip'>
                    <div className='flex flex-col items-start justify-center'>
                      <span className='text-sm'>Initial entry: 0.05 ETH</span>
                      <span className='text-sm'>
                        No taxes and gas fees included in the simulation
                      </span>
                    </div>
                  </div>
                  <div
                    className='tooltip-arrow'
                    data-popper-arrow
                    style={{
                      position: "absolute",
                      top: "0px",
                      transform: "translate3d(0px, 24px, 0px)",
                    }}
                  />
                </div>
                <table className='w-full text-sm text-left text-gray-400 mx-2 my-2'>
                  <thead>
                    <tr>
                      <th className='text-xl font-bold text-gray-400'>
                        Best Signals
                      </th>
                    </tr>
                    <tr className='h-6' />
                    <tr>
                      <th className='flex justify-start items-center text-xs md:text-lg text-gray-400 font-bold'>
                        {" "}
                        Signal{" "}
                        <span id='channels-tooltip-trigger'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            aria-hidden='true'
                            className='w-6 ml-1 text-gray-400'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
                            />
                          </svg>
                        </span>
                      </th>
                      <th className='text-xs md:text-lg text-center font-bold text-gray-400'>
                        Max Profit
                      </th>
                      <th className='flex justify-center items-center text-xs md:text-lg text-center font-bold text-gray-400'>
                        {" "}
                        Simulation result{" "}
                        <span id='simulation-tooltip-trigger'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            aria-hidden='true'
                            className='w-6 ml-1 text-gray-400'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
                            />
                          </svg>
                        </span>
                      </th>
                      <th className='hidden lg:table-cell text-xs md:text-lg text-center font-bold text-gray-400'>
                        Links
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='h-36'>
                      <td colSpan={8}>
                        <div className='flex flex-col items-center justify-center h-full text-gray-400'>
                          <div className='text-2xl font-medium'>
                            {" "}
                            No signals{" "}
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </dl>
          </div>
        </div>
        <div className='relative'>
          <div className='mt-18 inset-0 flex items-center' aria-hidden='true'>
            <div className='w-full border-t border-project-primary/70' />
          </div>
          <div className='space-y-16 pb-16 xl:space-y-20'>
            <div>
              <div className='ml-4 max-w-7xl'>
                <h2 className='mt-10 ml-4 mx-auto max-w-2xl text-2xl font-semibold leading-6 lg:mx-0 lg:max-w-none'>
                  Signals History
                </h2>
              </div>
              <div className='flex flex-col sm:flex-row pb-4 mt-8'>
                <label htmlFor='table-search' className='sr-only'>
                  Search
                </label>
                <div className='relative mt-1'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <svg
                      className='w-4 h-4 text-gray-400'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 20 20'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                      />
                    </svg>
                  </div>
                  <div
                    className='base-filter pr-3 sm:pr-0'
                    label-translation-key='$.filter_by'
                  >
                    <div className=''>
                      <input
                        type='text'
                        id='table-search'
                        className='sm:w-80 border-[0.5px] text-gray-900 text-sm rounded-3xl block w-full pl-10 p-2.5 bg-project-primary-darker border-project-primary placeholder-gray-400 dark:text-white focus:ring-project-primary focus:border-project-primary'
                        placeholder='Search'
                      />
                      {/**/}
                    </div>
                  </div>
                </div>
                <div className='pr-3 sm:pr-0'>
                  <button
                    className='transition-transform duration-200 text-project-primary/70 font-bold border border-project-primary/70 bg-gray-900 rounded-std shadow-sm py-3 px-8 relative inline-flex justify-center items-center rounded overflow-hidden select-none leading-none text-base font-medium focus:outline-none focus:ring-2 focus:ring-project-primary/50 disabled:opacity-40 disabled:pointer-events-hover disabled:cursor-not-allowed mt-6 w-full sm:mt-1 sm:ml-6 h-10 sm:w-[120px]'
                    data-test-base-button-wrapper
                  >
                    {/**/}
                    <div className='data-test-base-button-content-wrapper'>
                      <div className='flex items-center'>
                        {" "}
                        Filters{" "}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          aria-hidden='true'
                          className='w-6 ml-3 pointer-events-none text-project-primary/70'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z'
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div
                className='border-[0.5px] rounded-lg overflow-hidden border-project-primary bg-project-primary-darkest mb-4'
                is-tier-one='false'
                style={{ display: "none" }}
              >
                <div className='lg:border-t-[0.5px] lg:border-t-project-primary'>
                  <dl className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='border-b-[0.5px] border-project-primary-dark/50'>
                      <div className='py-6'>
                        <span className='pl-3 sm:pl-16 text-sm text-gray-400'>
                          {" "}
                          Date{" "}
                        </span>
                        <div
                          date-rangepicker
                          className='flex items-center pl-3 pr-3 sm:pr-0 sm:pl-16 mt-4'
                        >
                          <div className='relative'>
                            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                              <svg
                                className='w-4 h-4 text-gray-400'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                              >
                                <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                              </svg>
                            </div>
                            <input
                              id='start-date'
                              name='start'
                              type='text'
                              className='border-[0.5px] text-gray-900 text-sm rounded-3xl block w-full pl-10 p-2.5 bg-project-primary-darker border-project-primary placeholder-gray-400 dark:text-white focus:ring-project-primary focus:border-project-primary datepicker-input'
                              placeholder='Select start date'
                            />
                          </div>
                          <span className='mx-4 text-gray-400'>to</span>
                          <div className='relative'>
                            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                              <svg
                                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                              >
                                <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                              </svg>
                            </div>
                            <input
                              id='end-date'
                              name='end'
                              type='text'
                              className='border-[0.5px] text-gray-900 text-sm rounded-3xl block w-full pl-10 p-2.5 bg-project-primary-darker border-project-primary placeholder-gray-400 dark:text-white focus:ring-project-primary focus:border-project-primary datepicker-input'
                              placeholder='Select end date'
                            />
                          </div>
                          <div className='flex items-center cursor-pointer text-project-primary/50 hover:text-project-primary/70'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              aria-hidden='true'
                              className='w-7 ml-9'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                            </svg>
                            <span className='ml-1'>Reset</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='border-b-[0.5px] border-project-primary-dark/50'>
                      <div className='py-6 pr-6'>
                        <span className='max-w-122 flex justify-between pl-3 sm:pl-16 text-sm text-gray-400'>
                          <span>Time</span>
                          <span>0:00 - 24:00</span>
                        </span>
                        <div className='flex items-center max-w-130 mt-12 ml-18'>
                          <div className='w-full slider-target slider-ltr slider-horizontal slider-txt-dir-ltr'>
                            <div className='slider-base'>
                              <div className='slider-connects'>
                                <div
                                  className='slider-connect'
                                  style={{
                                    transform: "translate(0%, 0px) scale(1, 1)",
                                  }}
                                />
                              </div>
                              <div
                                className='slider-origin'
                                style={{
                                  transform: "translate(-100%, 0px)",
                                  zIndex: 5,
                                }}
                              >
                                <div
                                  className='slider-handle slider-handle-lower'
                                  data-handle={0}
                                  tabIndex={0}
                                  role='slider'
                                  aria-orientation='horizontal'
                                  aria-valuemin={0.0}
                                  aria-valuemax={24.0}
                                  aria-valuenow={0.0}
                                  aria-valuetext='0'
                                >
                                  <div className='slider-touch-area' />
                                  <div className=' slider-tooltip slider-tooltip-top'>
                                    0
                                  </div>
                                </div>
                              </div>
                              <div
                                className='slider-origin'
                                style={{
                                  transform: "translate(0%, 0px)",
                                  zIndex: 4,
                                }}
                              >
                                <div
                                  className='slider-handle slider-handle-upper'
                                  data-handle={1}
                                  tabIndex={0}
                                  role='slider'
                                  aria-orientation='horizontal'
                                  aria-valuemin={0.0}
                                  aria-valuemax={24.0}
                                  aria-valuenow={24.0}
                                  aria-valuetext='24'
                                >
                                  <div className='slider-touch-area' />
                                  <div className=' slider-tooltip slider-tooltip-top'>
                                    24
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='flex items-center cursor-pointer text-project-primary/50 hover:text-project-primary/70'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              aria-hidden='true'
                              className='w-7 ml-10'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                            </svg>
                            <span className='ml-1'>Reset</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='border-b-[0.5px] border-project-primary-dark/50'>
                      <div className='py-6 pr-6'>
                        <span className='max-w-122 flex justify-between pl-3 sm:pl-16 text-sm text-gray-400'>
                          <span>Market Cap</span>
                          <span>$0 - $2,000,000</span>
                        </span>
                        <div className='flex items-center max-w-130 mt-12 ml-18'>
                          <div className='w-full slider-target slider-ltr slider-horizontal slider-txt-dir-ltr'>
                            <div className='slider-base'>
                              <div className='slider-connects'>
                                <div
                                  className='slider-connect'
                                  style={{
                                    transform: "translate(0%, 0px) scale(1, 1)",
                                  }}
                                />
                              </div>
                              <div
                                className='slider-origin'
                                style={{
                                  transform: "translate(-100%, 0px)",
                                  zIndex: 5,
                                }}
                              >
                                <div
                                  className='slider-handle slider-handle-lower'
                                  data-handle={0}
                                  tabIndex={0}
                                  role='slider'
                                  aria-orientation='horizontal'
                                  aria-valuemin={0.0}
                                  aria-valuemax={2000000.0}
                                  aria-valuenow={0.0}
                                  aria-valuetext='0'
                                >
                                  <div className='slider-touch-area' />
                                  <div className=' slider-tooltip slider-tooltip-top'>
                                    0
                                  </div>
                                </div>
                              </div>
                              <div
                                className='slider-origin'
                                style={{
                                  transform: "translate(0%, 0px)",
                                  zIndex: 4,
                                }}
                              >
                                <div
                                  className='slider-handle slider-handle-upper'
                                  data-handle={1}
                                  tabIndex={0}
                                  role='slider'
                                  aria-orientation='horizontal'
                                  aria-valuemin={0.0}
                                  aria-valuemax={2000000.0}
                                  aria-valuenow={2000000.0}
                                  aria-valuetext='2000000'
                                >
                                  <div className='slider-touch-area' />
                                  <div className=' slider-tooltip slider-tooltip-top'>
                                    2000000
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='flex items-center cursor-pointer text-project-primary/50 hover:text-project-primary/70'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              aria-hidden='true'
                              className='w-7 ml-10'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                            </svg>
                            <span className='ml-1'>Reset</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='border-b-[0.5px] border-project-primary-dark/50'>
                      <div className='py-6 pr-6'>
                        <span className='max-w-122 flex justify-between pl-3 sm:pl-16 text-sm text-gray-400'>
                          <span>Liquidity</span>
                          <span>$0 - $100,000</span>
                        </span>
                        <div className='flex items-center max-w-130 mt-12 ml-18'>
                          <div className='w-full slider-target slider-ltr slider-horizontal slider-txt-dir-ltr'>
                            <div className='slider-base'>
                              <div className='slider-connects'>
                                <div
                                  className='slider-connect'
                                  style={{
                                    transform: "translate(0%, 0px) scale(1, 1)",
                                  }}
                                />
                              </div>
                              <div
                                className='slider-origin'
                                style={{
                                  transform: "translate(-100%, 0px)",
                                  zIndex: 5,
                                }}
                              >
                                <div
                                  className='slider-handle slider-handle-lower'
                                  data-handle={0}
                                  tabIndex={0}
                                  role='slider'
                                  aria-orientation='horizontal'
                                  aria-valuemin={0.0}
                                  aria-valuemax={100000.0}
                                  aria-valuenow={0.0}
                                  aria-valuetext='0'
                                >
                                  <div className='slider-touch-area' />
                                  <div className=' slider-tooltip slider-tooltip-top'>
                                    0
                                  </div>
                                </div>
                              </div>
                              <div
                                className='slider-origin'
                                style={{
                                  transform: "translate(0%, 0px)",
                                  zIndex: 4,
                                }}
                              >
                                <div
                                  className='slider-handle slider-handle-upper'
                                  data-handle={1}
                                  tabIndex={0}
                                  role='slider'
                                  aria-orientation='horizontal'
                                  aria-valuemin={0.0}
                                  aria-valuemax={100000.0}
                                  aria-valuenow={100000.0}
                                  aria-valuetext='100000'
                                >
                                  <div className='slider-touch-area' />
                                  <div className=' slider-tooltip slider-tooltip-top'>
                                    100000
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='flex items-center cursor-pointer text-project-primary/50 hover:text-project-primary/70'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              aria-hidden='true'
                              className='w-7 ml-10'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                            </svg>
                            <span className='ml-1'>Reset</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='border-b-[0.5px] border-project-primary-dark/50'>
                      <div className='py-6 pr-6'>
                        <span className='max-w-122 flex justify-between pl-3 sm:pl-16 text-sm text-gray-400'>
                          <span>Buy Tax</span>
                          <span>0% - 50%</span>
                        </span>
                        <div className='flex items-center max-w-130 mt-12 ml-18'>
                          <div className='w-full slider-target slider-ltr slider-horizontal slider-txt-dir-ltr'>
                            <div className='slider-base'>
                              <div className='slider-connects'>
                                <div
                                  className='slider-connect'
                                  style={{
                                    transform: "translate(0%, 0px) scale(1, 1)",
                                  }}
                                />
                              </div>
                              <div
                                className='slider-origin'
                                style={{
                                  transform: "translate(-100%, 0px)",
                                  zIndex: 5,
                                }}
                              >
                                <div
                                  className='slider-handle slider-handle-lower'
                                  data-handle={0}
                                  tabIndex={0}
                                  role='slider'
                                  aria-orientation='horizontal'
                                  aria-valuemin={0.0}
                                  aria-valuemax={50.0}
                                  aria-valuenow={0.0}
                                  aria-valuetext='0'
                                >
                                  <div className='slider-touch-area' />
                                  <div className=' slider-tooltip slider-tooltip-top'>
                                    0
                                  </div>
                                </div>
                              </div>
                              <div
                                className='slider-origin'
                                style={{
                                  transform: "translate(0%, 0px)",
                                  zIndex: 4,
                                }}
                              >
                                <div
                                  className='slider-handle slider-handle-upper'
                                  data-handle={1}
                                  tabIndex={0}
                                  role='slider'
                                  aria-orientation='horizontal'
                                  aria-valuemin={0.0}
                                  aria-valuemax={50.0}
                                  aria-valuenow={50.0}
                                  aria-valuetext='50'
                                >
                                  <div className='slider-touch-area' />
                                  <div className=' slider-tooltip slider-tooltip-top'>
                                    50
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='flex items-center cursor-pointer text-project-primary/50 hover:text-project-primary/70'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              aria-hidden='true'
                              className='w-7 ml-10'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                            </svg>
                            <span className='ml-1'>Reset</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='border-b-[0.5px] border-project-primary-dark/50'>
                      <div className='py-6 pr-6'>
                        <span className='max-w-122 flex justify-between pl-3 sm:pl-16 text-sm text-gray-400'>
                          <span>Sell Tax</span>
                          <span>0% - 50%</span>
                        </span>
                        <div className='flex items-center max-w-130 mt-12 ml-18'>
                          <div className='w-full slider-target slider-ltr slider-horizontal slider-txt-dir-ltr'>
                            <div className='slider-base'>
                              <div className='slider-connects'>
                                <div
                                  className='slider-connect'
                                  style={{
                                    transform: "translate(0%, 0px) scale(1, 1)",
                                  }}
                                />
                              </div>
                              <div
                                className='slider-origin'
                                style={{
                                  transform: "translate(-100%, 0px)",
                                  zIndex: 5,
                                }}
                              >
                                <div
                                  className='slider-handle slider-handle-lower'
                                  data-handle={0}
                                  tabIndex={0}
                                  role='slider'
                                  aria-orientation='horizontal'
                                  aria-valuemin={0.0}
                                  aria-valuemax={50.0}
                                  aria-valuenow={0.0}
                                  aria-valuetext='0'
                                >
                                  <div className='slider-touch-area' />
                                  <div className=' slider-tooltip slider-tooltip-top'>
                                    0
                                  </div>
                                </div>
                              </div>
                              <div
                                className='slider-origin'
                                style={{
                                  transform: "translate(0%, 0px)",
                                  zIndex: 4,
                                }}
                              >
                                <div
                                  className='slider-handle slider-handle-upper'
                                  data-handle={1}
                                  tabIndex={0}
                                  role='slider'
                                  aria-orientation='horizontal'
                                  aria-valuemin={0.0}
                                  aria-valuemax={50.0}
                                  aria-valuenow={50.0}
                                  aria-valuetext='50'
                                >
                                  <div className='slider-touch-area' />
                                  <div className=' slider-tooltip slider-tooltip-top'>
                                    50
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='flex items-center cursor-pointer text-project-primary/50 hover:text-project-primary/70'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              aria-hidden='true'
                              className='w-7 ml-10'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                            </svg>
                            <span className='ml-1'>Reset</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='border-b-[0.5px] border-project-primary'>
                      <div className='pt-6 pb-12'>
                        <div className='flex pl-3 sm:pl-16 text-sm font-bold text-gray-400'>
                          {" "}
                          Security{" "}
                          <div className='flex flex-col sm:flex-row items-center pl-1 sm:pl-8'>
                            <div className='flex items-center ml-4 sm:ml-0'>
                              <div
                                className='toggle-container w-full'
                                tabIndex={0}
                                aria-checked='false'
                                role='switch'
                              >
                                <input
                                  type='checkbox'
                                  id='toggle'
                                  name='toggle'
                                  defaultValue='true'
                                  style={{ display: "none" }}
                                />
                                <div className='toggle toggle-off'>
                                  <span className='toggle-handle toggle-handle-off' />
                                  <span className='toggle-label'>&nbsp;</span>
                                  {/*v-if*/}
                                </div>
                              </div>
                            </div>
                            <span className='ml-4 cursor-pointer'>
                              {" "}
                              Enable{" "}
                            </span>
                          </div>
                        </div>
                        <div className='flex justify-between pr-3 sm:pr-16'>
                          <div className='flex flex-col sm:flex-row items-center sm:pl-16 mt-4 lg:mt-6 opacity-50 cursor-not-allowed pointer-events-none'>
                            <div className='flex items-center ml-4 sm:ml-0'>
                              <div
                                className='toggle-container w-full'
                                tabIndex={0}
                                aria-checked='false'
                                role='switch'
                              >
                                <input
                                  type='checkbox'
                                  id='toggle'
                                  name='toggle'
                                  defaultValue='true'
                                  style={{ display: "none" }}
                                />
                                <div className='toggle toggle-off'>
                                  <span className='toggle-handle toggle-handle-off' />
                                  <span className='toggle-label'>&nbsp;</span>
                                  {/*v-if*/}
                                </div>
                              </div>
                            </div>
                            <span className='ml-4 cursor-pointer'>
                              {" "}
                              Renounced{" "}
                            </span>
                          </div>
                          <div className='flex flex-col sm:flex-row items-center sm:pl-16 mt-4 lg:mt-6 opacity-50 cursor-not-allowed pointer-events-none'>
                            <div className='flex items-center ml-4 sm:ml-0'>
                              <div
                                className='toggle-container w-full'
                                tabIndex={0}
                                aria-checked='false'
                                role='switch'
                              >
                                <input
                                  type='checkbox'
                                  id='toggle'
                                  name='toggle'
                                  defaultValue='true'
                                  style={{ display: "none" }}
                                />
                                <div className='toggle toggle-off'>
                                  <span className='toggle-handle toggle-handle-off' />
                                  <span className='toggle-label'>&nbsp;</span>
                                  {/*v-if*/}
                                </div>
                              </div>
                            </div>
                            <span className='ml-4 cursor-pointer'>
                              {" "}
                              No Honeypot{" "}
                            </span>
                          </div>
                          <div className='flex flex-col sm:flex-row items-center sm:pl-16 mt-4 lg:mt-6 opacity-50 cursor-not-allowed pointer-events-none'>
                            <div className='flex items-center ml-4 sm:ml-0'>
                              <div
                                className='toggle-container w-full'
                                tabIndex={0}
                                aria-checked='false'
                                role='switch'
                              >
                                <input
                                  type='checkbox'
                                  id='toggle'
                                  name='toggle'
                                  defaultValue='true'
                                  style={{ display: "none" }}
                                />
                                <div className='toggle toggle-off'>
                                  <span className='toggle-handle toggle-handle-off' />
                                  <span className='toggle-label'>&nbsp;</span>
                                  {/*v-if*/}
                                </div>
                              </div>
                            </div>
                            <span className='ml-4 cursor-pointer'>
                              {" "}
                              Verified{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='border-b-[0.5px] border-project-primary' />
                  </dl>
                </div>
                <div className='bg-project-primary-darker'>
                  <div className='py-6'>
                    <button
                      className='transition-transform duration-200 text-gray-800 font-bold border border-project-primary rounded-std shadow-sm prophet-gradient py-3 px-8 relative inline-flex justify-center items-center rounded overflow-hidden select-none leading-none text-base font-medium focus:outline-none focus:ring-2 focus:ring-project-primary/50 disabled:opacity-40 disabled:pointer-events-hover disabled:cursor-not-allowed mx-3 sm:mx-16 h-10 w-[120px]'
                      data-test-base-button-wrapper
                    >
                      <div
                        className='-translate-y-10 absolute inset-y-0 inset-x-1/2 inset-y-1/2 transition-transform duration-200'
                        data-test-base-button-spinner-wrapper
                      >
                        <div
                          data-v-ce8cef1d
                          className='loader -ml-4 mb-4'
                          data-test-flat-spinner-wrapper
                          data-test-base-button-spinner
                          style={{
                            width: "calc(30.5px)",
                            height: "calc(6.5px)",
                          }}
                        >
                          <div
                            data-v-ce8cef1d
                            className='loader-scale'
                            data-test-flat-spinner-loader-wrapper
                            style={{ transform: "scale(0.5)" }}
                          >
                            <div
                              data-v-ce8cef1d
                              className='bg-gray-900 dot'
                              data-test-flat-spinner-loader
                            />
                            <div
                              data-v-ce8cef1d
                              className='bg-gray-900 dot'
                              data-test-flat-spinner-loader
                            />
                            <div
                              data-v-ce8cef1d
                              className='bg-gray-900 dot'
                              data-test-flat-spinner-loader
                            />
                            <div
                              data-v-ce8cef1d
                              className='bg-gray-900 dot'
                              data-test-flat-spinner-loader
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className='transition-transform duration-200'
                        data-test-base-button-content-wrapper
                      >
                        {" "}
                        Apply{" "}
                      </div>
                    </button>
                  </div>
                </div>
                <table className='w-full text-sm text-left text-gray-400'>
                  <thead className='text-base bg-project-primary-darker'>
                    <tr col-span={8}>
                      <th
                        scope='col'
                        className='px-3 sm:px-6 py-3 select-none rounded-t-md'
                      >
                        {" "}
                        Advanced filters{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody />
                </table>
              </div>
              <div className='relative overflow-y-auto shadow-md sm:rounded-lg'>
                <div className='border-[0.5px] rounded-lg overflow-hidden border-project-primary'>
                  <table className='w-full text-sm text-left text-gray-400'>
                    <thead className='bg-project-primary-darker'>
                      <tr>
                        <th scope='col' className='pl-1 pr-2 py-2' />
                        <th
                          scope='col'
                          className='min-w-40 ms:min-w-48 px-3 sm:px-6 py-3 cursor-pointer select-none'
                        >
                          <div className='flex'>
                            <p className=''> Max profit [%]</p>
                            {/**/}
                          </div>
                          <div
                            id='success-tooltip'
                            className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-300 transition-opacity delay-500 duration-300 bg-project-primary-darker rounded-lg shadow-sm opacity-0 tooltip'
                            role='tooltip'
                          >
                            <div id='success-tooltip'>
                              <div className='flex items-center'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  strokeWidth='1.5'
                                  stroke='currentColor'
                                  aria-hidden='true'
                                  className='w-6 text-green-400'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z'
                                  />
                                </svg>
                                <span className='ml-2 text-lg'> ≥ 50 %</span>
                              </div>
                              <div className='flex items-center'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  strokeWidth='1.5'
                                  stroke='currentColor'
                                  aria-hidden='true'
                                  className='mt-2 w-6 text-yellow-400'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z'
                                  />
                                </svg>
                                <span className='pt-1.5 ml-2 text-lg'>
                                  {" "}
                                  0 % - 50 %
                                </span>
                              </div>
                              <div className='flex items-center'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  strokeWidth='1.5'
                                  stroke='currentColor'
                                  aria-hidden='true'
                                  className='mt-2 w-6 text-red-400'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z'
                                  />
                                </svg>
                                <span className='pt-1.5 ml-2 text-lg'>
                                  &lt; 0 %
                                </span>
                              </div>
                            </div>
                            <div className='tooltip-arrow' data-popper-arrow />
                          </div>
                        </th>
                        <th
                          scope='col'
                          className='px-3 sm:px-6 py-3 cursor-pointer select-none'
                        >
                          <p>Symbol / Name</p>
                          <p>Channels</p>
                          <div className='flex'>
                            <p className='text-white'> Called at </p>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              aria-hidden='true'
                              className='w-4 ml-1'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3'
                              />
                            </svg>
                          </div>
                        </th>
                        <th
                          scope='col'
                          className='hidden md:table-cell px-3 sm:px-6 py-3 cursor-pointer select-none'
                        >
                          <div className='flex'>
                            <p className=''> Market cap </p>
                            {/**/}
                          </div>
                          <div className='flex'>
                            <p className=''> Liquidity </p>
                            {/**/}
                          </div>
                        </th>
                        <th
                          scope='col'
                          className='hidden md:table-cell px-3 sm:px-6 py-3 cursor-not-allowed select-none'
                        >
                          <div className='flex flex-col'>
                            <p>Buy Tax / Sell Tax</p>
                            <p>Buys / Sells</p>
                          </div>
                        </th>
                        <th
                          scope='col'
                          className='hidden md:table-cell px-3 sm:px-6 py-3 cursor-not-allowed select-none'
                        >
                          {" "}
                          Contract security{" "}
                        </th>
                        <th
                          scope='col'
                          className='hidden md:table-cell px-3 sm:px-6 py-3 cursor-not-allowed select-none'
                        >
                          {" "}
                          Links{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='h-36 bg-project-primary-darkest'>
                        <td colSpan={8}>
                          <div className='flex flex-col items-center justify-center h-full text-gray-400'>
                            <div className='text-2xl font-medium'>
                              {" "}
                              No signals{" "}
                            </div>
                          </div>
                        </td>
                      </tr>
                      {/**/}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
