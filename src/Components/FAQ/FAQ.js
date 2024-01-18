import React from 'react'

const FaqQuestionAnswer = ({ question }) => {
  return (
    <div className=' h-[58px] px-6 border-[1px] border-[#217EEC] flex items-center justify-between  rounded-[12px] max-w-[800px]'>
      <p>{question}</p>
      <div className=' flex items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.855 7.49599C4.91074 7.44006 4.97698 7.39567 5.04991 7.36539C5.12284 7.33511 5.20103 7.31952 5.28 7.31952C5.35897 7.31952 5.43716 7.33511 5.51009 7.36539C5.58302 7.39567 5.64926 7.44006 5.705 7.49599L12.48 14.272L19.255 7.49599C19.3677 7.38328 19.5206 7.31995 19.68 7.31995C19.8394 7.31995 19.9923 7.38328 20.105 7.49599C20.2177 7.60871 20.281 7.76159 20.281 7.92099C20.281 8.0804 20.2177 8.23328 20.105 8.34599L12.905 15.546C12.8493 15.6019 12.783 15.6463 12.7101 15.6766C12.6372 15.7069 12.559 15.7225 12.48 15.7225C12.401 15.7225 12.3228 15.7069 12.2499 15.6766C12.177 15.6463 12.1107 15.6019 12.055 15.546L4.855 8.34599C4.79907 8.29025 4.75468 8.22401 4.7244 8.15108C4.69412 8.07815 4.67853 7.99996 4.67853 7.92099C4.67853 7.84202 4.69412 7.76383 4.7244 7.6909C4.75468 7.61797 4.79907 7.55173 4.855 7.49599Z" fill="#28262C" />
        </svg>
      </div>
    </div>
  )
}

function FAQ() {
  return (
    <>
      <p className='text-[48px] font-Inter font-bold tracking-[0.24px] pb-[47px]'
        style={{
          background: 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)',
          backgroundClip: "text",
          color: "transparent"
        }}
      >FAQ</p >
      <div className='flex flex-col gap-8 mt-12' >
        <FaqQuestionAnswer question={"Can education flashcards be used for all age groups?"} />
        <FaqQuestionAnswer question={"How do education flashcards work?"} />
        <FaqQuestionAnswer question={"Can education flashcards be used for test preparation?"} />
      </div>
    </>
  )
}

export default FAQ
