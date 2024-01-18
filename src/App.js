import FAQ from "./Components/FAQ/FAQ";
import Navigation from "./Components/Navigation/Navigation";
import Probems from "./Components/Problems/Probems";

const Arrowsvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M8.59003 16.59L13.17 12L8.59003 7.41L10 6L16 12L10 18L8.59003 16.59Z" fill="#06286E" />
    </svg>
  )
}

function App() {

  return (
    <div className="bg-[#f9f9f9]">
      <Navigation />
      <div className="max-w-[1400px] m-auto px-2 flex items-center justify-start mt-9">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M24.5738 11.7175L15.8238 4.06123C15.5958 3.86151 15.3031 3.7514 15 3.7514C14.6969 3.7514 14.4042 3.86151 14.1763 4.06123L5.42625 11.7175C5.29221 11.8349 5.18483 11.9797 5.11132 12.142C5.0378 12.3043 4.99985 12.4805 5 12.6587V23.7487C5 24.0802 5.1317 24.3982 5.36612 24.6326C5.60054 24.867 5.91848 24.9987 6.25 24.9987H11.25C11.5815 24.9987 11.8995 24.867 12.1339 24.6326C12.3683 24.3982 12.5 24.0802 12.5 23.7487V18.7487C12.5 18.4172 12.6317 18.0993 12.8661 17.8648C13.1005 17.6304 13.4185 17.4987 13.75 17.4987H16.25C16.5815 17.4987 16.8995 17.6304 17.1339 17.8648C17.3683 18.0993 17.5 18.4172 17.5 18.7487V23.7487C17.5 24.0802 17.6317 24.3982 17.8661 24.6326C18.1005 24.867 18.4185 24.9987 18.75 24.9987H23.75C24.0815 24.9987 24.3995 24.867 24.6339 24.6326C24.8683 24.3982 25 24.0802 25 23.7487V12.6587C25.0002 12.4805 24.9622 12.3043 24.8887 12.142C24.8152 11.9797 24.7078 11.8349 24.5738 11.7175Z" stroke="#696671" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <Arrowsvg />
        <p className="text-[#696671] font-Inter text-lg font-medium not-italic">Fleshcard</p>
        <Arrowsvg />
        <p className="text-[#696671] font-Inter text-lg font-medium not-italic">Mathematics</p>
        <Arrowsvg />
        <p className="text-[#06286E] font-Inter text-lg font-medium not-italic">Relation and function</p>
      </div>
      <div>
        <Probems />
      </div>
      <div className="mt-[81px] flex items-center justify-between max-w-[1400px] m-auto px-3">
        <div className="flex items-start justify-center gap-[21px] ">
          <div className="w-[85px] h-[80px] p-2 bg-white rounded-[50%] overflow-hidden flex items-center justify-center shadow-[0_0_51px_-20px_rgba(0,153,255,1)]">
            <img className="h-full w-full p-3" src="https://i.tracxn.com/logo/company/Screenshot_2023-10-18_111416_9a56689a-e7db-41ba-986c-98dd1886a8ee.png?height=120&width=120" alt="" />
          </div>
          <div className="flex flex-col gap-[10px] items-start justify-start">
            <p className="text-[#696671] font-Inter text-xs font-bold">Published by</p>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="116" height="36" viewBox="0 0 116 36" fill="none">
                <path d="M4.01153 3.78583H0.953796V25.7483H4.01153V15.3718H17.1354V25.7483H20.1931V3.78583H17.1354V12.4985H4.01153V3.78583Z" fill="#06286E" />
                <path d="M20.7561 9.47291L28.0004 25.748C27.347 28.0475 26.4863 28.8034 24.4073 28.8034C23.9917 28.8034 23.4572 28.7433 22.7153 28.6222V31.4053C23.6055 31.4955 24.2589 31.5264 24.704 31.5264C28.6529 31.5264 29.3063 30.0438 31.236 25.6269L38.3025 9.47291H34.948L29.6334 23.1771L24.1999 9.47291H20.7561Z" fill="#06286E" />
                <path d="M52.2265 9.47324V12.1352C50.9502 10.139 48.8122 8.95869 46.0208 8.95869C41.0038 8.95869 37.5001 12.5587 37.5001 17.6413C37.5001 22.693 40.9734 26.2019 46.0512 26.2019C48.6039 26.2019 50.564 25.2648 52.2265 23.3587V23.9033C52.2265 27.4423 50.5935 28.8639 46.2291 28.8639C43.587 28.8639 42.1023 28.0479 41.8056 26.293H38.5691C38.8953 29.6808 41.5383 31.5869 46.1996 31.5869C52.4339 31.5869 55.1064 29.1362 55.1064 23.661V9.47324H52.2265ZM46.4668 11.6817C50.1484 11.6817 52.4339 13.9202 52.4339 17.6413C52.4339 21.3014 50.1484 23.4798 46.4668 23.4798C42.7852 23.4798 40.5283 21.3315 40.5283 17.6413C40.5283 13.9202 42.7852 11.6817 46.4668 11.6817Z" fill="#06286E" />
                <path d="M71.227 9.47324V12.1352C69.9506 10.139 67.8126 8.95869 65.0213 8.95869C60.0043 8.95869 56.5005 12.5587 56.5005 17.6413C56.5005 22.693 59.9739 26.2019 65.0517 26.2019C67.6044 26.2019 69.5645 25.2648 71.227 23.3587V23.9033C71.227 27.4423 69.594 28.8639 65.2295 28.8639C62.5874 28.8639 61.1028 28.0479 60.806 26.293H57.5695C57.8958 29.6808 60.5388 31.5869 65.2 31.5869C71.4344 31.5869 74.1069 29.1362 74.1069 23.661V9.47324H71.227ZM65.4673 11.6817C69.1489 11.6817 71.4344 13.9202 71.4344 17.6413C71.4344 21.3014 69.1489 23.4798 65.4673 23.4798C61.7857 23.4798 59.5288 21.3315 59.5288 17.6413C59.5288 13.9202 61.7857 11.6817 65.4673 11.6817Z" fill="#06286E" />
                <path d="M92.9592 18.216V17.6413C92.9592 12.2263 89.7227 8.95869 84.2597 8.95869C78.9156 8.95869 75.5013 12.3775 75.5013 17.6413C75.5013 22.8742 78.8861 26.2019 84.2597 26.2019C88.5053 26.2019 91.5639 24.2056 92.6919 20.6967H89.3366C88.6841 22.4817 86.7838 23.4798 84.2597 23.4798C80.8454 23.4798 78.559 21.3925 78.559 18.216H92.9592ZM78.6189 16.1286C79.0935 13.3455 81.202 11.6817 84.2597 11.6817C87.3478 11.6817 89.4259 13.3756 89.8711 16.1286H78.6189Z" fill="#06286E" />
                <path d="M92.3372 3.78583L100.799 14.6159L91.9216 25.7483H98.6904L104.035 18.6995L109.052 25.7483H116L107.212 14.5558L115.703 3.78583H109.052L104.094 10.6525L99.1364 3.78583H92.3372Z" fill="#06286E" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M30.0001 4.99981C16.2001 4.99981 5.00009 16.1998 5.00009 29.9998C5.00009 43.7998 16.2001 54.9998 30.0001 54.9998C43.8001 54.9998 55.0001 43.7998 55.0001 29.9998C55.0001 16.1998 43.8001 4.99981 30.0001 4.99981ZM42.5001 32.4998H32.5001V42.4998H27.5001V32.4998H17.5001V27.4998H27.5001V17.4998H32.5001V27.4998H42.5001V32.4998Z" fill="url(#paint0_linear_1_202)" />
              <defs>
                <linearGradient id="paint0_linear_1_202" x1="30.0001" y1="4.99981" x2="30.0001" y2="54.9998" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#06286E" />
                  <stop offset="1" stop-color="#164EC0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="font-Inter text-[28px] not-italic font-semibold "
            style={{
              background: 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)',
              backgroundClip: "text",
              color: "transparent"
            }}
          >
            Create Flashcard
          </p>
        </div>
      </div>
      <div className="mt-[154px] max-w-[1400px] m-auto mb-20">
        <FAQ />
      </div>
    </div >
  );
}

export default App;
