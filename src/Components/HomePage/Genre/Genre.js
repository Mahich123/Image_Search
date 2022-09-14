import React from "react";

const Genre = () => {
  return (
  <div class="container mx-auto">
  <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 p-5 sm:p-20">

    <div class="p-6 rounded-[10px]">
      <p className="font-epi text-[#748F99] sm:text-[larger] md:text-[1.45rem]">Popular Genres</p>
        <h2 className="font-epi text-[#303B4C] text-[20px] font-bold sm:text-[1.8rem] sm:leading-[initial] md:text-[2rem] xl:text-[34px]">Choose your genres</h2>
        <button class="bg-[#748F99] text-white font-epi text-[small] my-[2.5rem] py-1 px-3 sm:px-7 sm:py-[0.70rem] rounded inline-flex items-center ">
            <span>All Genres</span>
        </button>
    </div>
    <div class="p-6 bg-[#303B4C] rounded-[10px]">
      <svg  width="26" height="25" viewBox="0 0 51 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.7002 8.56048V7.15048C6.7002 6.37176 7.33406 5.74048 8.11035 5.74048H9.99004C10.7688 5.74048 11.4002 6.37334 11.4002 7.15048V8.56048" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0837 4.14109C15.284 7.18366 12.0117 9.05 8.47669 9.05H3.40662C2.62887 9.05 2 9.68322 2 10.4643V40.0657C2 40.8467 2.62976 41.48 3.40662 41.48H47.5934C48.3711 41.48 49 40.8468 49 40.0657V10.4643C49 9.68326 48.3702 9.05 47.5934 9.05H42.5667C39.0198 9.05 35.7382 7.17112 33.9427 4.11223L33.415 3.2132C33.0217 2.54316 32.0721 2 31.2939 2H19.7591C18.9854 2 18.0289 2.54317 17.6326 3.2132L17.0837 4.14109Z" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.5002 35.8399C31.2108 35.8399 35.8402 31.2105 35.8402 25.4999C35.8402 19.7893 31.2108 15.1599 25.5002 15.1599C19.7895 15.1599 15.1602 19.7893 15.1602 25.4999C15.1602 31.2105 19.7895 35.8399 25.5002 35.8399Z" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23.1496 19.3901C21.7273 19.3901 19.3896 21.6175 19.3896 23.1501" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.7998 7.63989H30.1998" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <h3 className="font-epi text-white my-[1rem] md:text-[x-large]">Models</h3>
        <p className="font-epi text-white text-[10px] break-all md:text-[13px]">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. In massa velit.</p>
        <p className="font-epi text-[#748F99] text-[11px] my-[1.5rem]">Read More</p>
    </div>

    <div class="p-6 bg-[#303B4C] rounded-[10px]">
       <svg width="22" height="24" viewBox="0 0 52 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M50 12.0004V40.8004H2V2.40041H40.4L50 12.0004Z" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M38.9605 3.36045V12.9604H48.5605" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 39.3604L16.4 24.9604L21.2 29.7604L30.8 20.1604L50 39.3604" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.0402 18.2404C15.6912 18.2404 17.8402 16.0913 17.8402 13.4404C17.8402 10.7894 15.6912 8.64038 13.0402 8.64038C10.3893 8.64038 8.24023 10.7894 8.24023 13.4404C8.24023 16.0913 10.3893 18.2404 13.0402 18.2404Z" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>


        <h3 className="font-epi text-white text-[16px] my-[0.5rem] md:text-[x-large]">Landscape</h3>
        <p className="font-epi text-white text-[10px] my-[0.3rem] md:text-[13px]">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. In massa velit.</p>

        <p className="font-epi text-[#748F99] text-[11px] my-[1.5rem]">Read More</p>   
    </div>

    <div class="p-6 bg-[#303B4C] rounded-[10px]">
    <svg width="22" height="24" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.3964 21.072C30.5511 19.9173 30.5511 18.0452 29.3964 16.8905C28.2417 15.7359 26.3696 15.7359 25.2149 16.8905L2.37766 39.7278C1.22297 40.8825 1.22298 42.7546 2.37766 43.9093C3.53234 45.064 5.40445 45.064 6.55913 43.9093L29.3964 21.072Z" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.5195 23.3433L22.9371 26.7609" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M26.5771 1.74219V10.8399" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M39.5098 6.9104L33.0767 13.3434" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M45 19.7102H35.9023" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M39.832 32.6426L33.399 26.2095" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.7773 7.23218L20.2104 13.6652" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>


        <h3 className="font-epi text-white text-[16px] my-[0.5rem] md:text-[x-large]">Random</h3>
        <p className="font-epi text-white text-[10px] my-[0.3rem] md:text-[13px]">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. In massa velit.</p>
        <p className="font-epi text-[#748F99] text-[11px] my-[1.5rem]">Read More</p>
    </div>

    <div class="p-6 bg-[#303B4C] rounded-[10px]">
    <svg width="22" height="24" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.0779 18.8552L1.83496 23.4767C0.720553 24.0339 0.722808 24.9343 1.83496 25.4904L21.4863 35.3161C22.6007 35.8733 24.4016 35.8722 25.5137 35.3161L45.165 25.4904C46.2794 24.9332 46.2772 24.0328 45.165 23.4767L35.9221 18.8552" stroke="#748F99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M45.0772 12.1012C46.2378 12.6815 46.2357 13.6233 45.0772 14.2025L25.6011 23.9406C24.4406 24.5209 22.557 24.5198 21.3985 23.9406L1.92237 14.2025C0.761833 13.6223 0.763882 12.6805 1.92237 12.1012L21.3985 2.36316C22.559 1.78289 24.4427 1.78392 25.6011 2.36316L45.0772 12.1012Z" stroke="#748F99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.7867 30.1825C8.79746 31.1771 5.81353 32.6691 1.83496 34.6583C0.720553 35.2155 0.722808 36.116 1.83496 36.6721L21.4863 46.4977C22.6007 47.0549 24.4016 47.0538 25.5137 46.4977L45.165 36.6721C46.2794 36.1149 46.2772 35.2144 45.165 34.6583C41.1589 32.6553 38.1544 31.153 36.1513 30.1515" stroke="#748F99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

        <h3 className="font-epi text-white text-[16px] my-[0.5rem] md:text-[x-large]">Branding</h3>
        <p className="font-epi text-white text-[10px] my-[0.3rem] md:text-[13px]">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. In massa velit.</p>
        <p className="font-epi text-[#748F99] text-[11px] my-[1.5rem]">Read More</p>
    </div>

    <div class="p-6 bg-[#303B4C] rounded-[10px]">
    <svg width="22" height="24" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.48926 42.5514C6.92771 39.032 9.73163 33.8566 9.73163 28.0868V20.8871C9.73163 12.9344 16.834 6.48755 25.5951 6.48755C34.3563 6.48755 41.4587 12.9344 41.4587 20.8871V28.0868C41.4587 33.8566 44.2626 39.032 48.701 42.5514" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25.5 48.2C38.4787 48.2 49 46.0958 49 43.5C49 40.9043 38.4787 38.8 25.5 38.8C12.5213 38.8 2 40.9043 2 43.5C2 46.0958 12.5213 48.2 25.5 48.2Z" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M31.1999 39.2897C30.7399 42.0755 28.3199 44.2003 25.4037 44.2003C22.5227 44.2003 20.1261 42.1266 19.625 39.3904" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.6045 6.97713C20.6045 4.27324 22.7964 2.0813 25.5003 2.0813C28.2042 2.0813 30.3962 4.27324 30.3962 6.97713" stroke="#748F99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    


        <h3 className="font-epi text-white text-[16px] my-[0.5rem] md:text-[x-large]">Events</h3>
        <p className="font-epi text-white text-[10px] my-[0.3rem] md:text-[13px]">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. In massa velit.</p>
        <p className="font-epi text-[#748F99] text-[11px] my-[1.5rem]">Read More</p>
    </div>
  </div>
</div>
  
  );
};

export default Genre;
