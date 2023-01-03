import React from 'react'

const Contact = () => {
  return (
    <div className='p-10 pl-8 lg:p-40 md:grid md:grid-cols-2 md:w-4/5 md:my-0 md:mx-auto md:gap-12'>
     <div>
      <div>
          <p className='font-epi text-[#748F99] lg:text-[20px]'>Feedback</p>
          <h2 className='font-epi font-medium text-[1.5em] lg:text-[27px]'>Get In Touch</h2>
      </div>
        {/* <div className='grid grid-cols-2 gap-[1rem] pt-[1rem]'>
          <div className='flex gap-1'>
            <svg width="30" height="30" viewBox="0 0 30 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5525 0C6.52782 0 0 6.55755 0 14.6172C0 25.4009 13.4267 38.2179 13.9984 38.7588C14.1546 38.9055 14.3536 38.9793 14.5525 38.9793C14.7515 38.9793 14.9505 38.9055 15.1069 38.7588C15.6785 38.2179 29.1051 25.4009 29.1051 14.6172C29.1051 6.55755 22.5773 0 14.5525 0ZM14.5525 37.0307C12.0119 34.4828 1.61693 23.5119 1.61693 14.6172C1.61693 7.45293 7.41995 1.62411 14.5525 1.62411C21.6851 1.62411 27.4882 7.45293 27.4882 14.6172C27.4882 23.5119 17.0932 34.4828 14.5525 37.0307Z" fill="#748F99"/>
            <path d="M14.5525 6.49609C10.0949 6.49609 6.46777 10.1393 6.46777 14.6168C6.46777 19.0943 10.0949 22.7375 14.5525 22.7375C19.0102 22.7375 22.6373 19.0943 22.6373 14.6168C22.6373 10.1393 19.0102 6.49609 14.5525 6.49609ZM14.5525 21.1133C10.9854 21.1133 8.08477 18.1989 8.08477 14.6168C8.08477 11.0347 10.9855 8.12027 14.5525 8.12027C18.1196 8.12027 21.0203 11.0347 21.0203 14.6168C21.0203 18.1989 18.1196 21.1133 14.5525 21.1133Z" fill="#748F99"/>
            </svg>
              <div className='pl-[7px]'>
                <h4 className='font-epi'>Address</h4>
                <p className='text-[12px] font-epi lg:w-[64%]'>964 Worthington Drive Rylie, Texas USA</p>
              </div>
          </div>
          <div className='flex gap-1'>
            <svg width="30" height="30" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8946 23.2114L13.7907 23.2222H17.98L18.0047 23.2006L17.8815 23.2012L26.04 16.0111V6.12165C26.04 5.44082 25.4762 4.88889 24.8001 4.88889H6.19995C5.51514 4.88889 4.96 5.43123 4.96 6.11365V16.1333L13.0832 23.1982L15.8946 23.2114ZM11.2727 3.66667L15.5 0L19.7273 3.66667H24.8032C26.1753 3.66667 27.28 4.76087 27.28 6.11064V10.2178L31 13.4444V30.5628C31 31.9067 29.8877 33 28.5155 33H2.48446C1.10331 33 0 31.9088 0 30.5628V13.4444L3.72 10.2178V6.11064C3.72 4.75131 4.8289 3.66667 6.1968 3.66667H11.2727ZM17.8905 3.66667L15.5 1.58889L13.1095 3.66667H17.8905ZM27.28 11.8278L29.14 13.4444L27.28 15.0741V11.8278ZM3.72 15.0741L1.86 13.4444L3.72 11.8278V15.0741ZM11.78 24.4444L3.1 31.7778H27.9L19.22 24.4444H11.78ZM29.3696 31.4419L19.84 23.2431L29.76 14.6667V22.6111V30.5556C29.76 30.9016 29.61 31.2178 29.3696 31.4419ZM1.63043 31.4419L11.16 23.2431L1.24 14.6667V22.6111V30.5556C1.24 30.9016 1.39005 31.2178 1.63043 31.4419Z" fill="#748F99"/>
            </svg>
              <div className='pl-[7px]'>
                <h4 className='font-epi'>Address</h4>
                <p className='text-[12px] font-epi lg:w-[64%]'>964 Worthington Drive Rylie, Texas USA</p>
              </div>
          </div>
          <div className='flex gap-1'>
            <svg width="30" height="30" viewBox="0 0 31 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.67339 15.218C9.19548 13.8422 9.40147 13.5557 9.40147 13.5557L12.3736 10.857C13.1449 10.1619 13.3431 9.0548 12.761 8.2018L9.23971 2.5196C8.72931 1.71809 7.66367 1.3867 6.78046 1.78404L4.42857 2.86413C4.25394 2.95591 4.02781 3.11933 3.86325 3.27268C-1.32982 7.85183 2.19911 17.8314 7.48667 26.1957C12.6108 34.3339 20.2279 42.254 26.6365 39.3092C26.8111 39.2174 26.9858 39.1256 27.1503 38.9723L29.2168 37.3067C29.9366 36.6833 30.1448 35.6378 29.6244 34.7747L26.0516 29.1641C25.5311 28.3011 24.4039 27.9797 23.4591 28.3871L19.7214 29.8836C19.7214 29.8836 18.3569 30.0436 13.5081 22.4293C11.7933 19.6755 10.7938 17.8161 10.1927 16.4605C9.97895 15.9266 9.79539 15.5773 9.67339 15.218Z" stroke="#748F99" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
            </svg>
              <div className='pl-[7px]'>
                <h4 className='font-epi'>Address</h4>
                <p className='text-[12px] font-epi lg:w-[64%]'>964 Worthington Drive Rylie, Texas USA</p>
              </div>
          </div>
        </div> */}
        <p className='text-[11px] text-left lg:text-[20px]  text-[#4c4040] font-epi'>An open-source dynamic image searching site. which lets you upload your creativity or search beautiful images whenever you want. We are trying to make it better, and we need your feedback to know how you feel or what you think about improving Let us know your thoughts Thank you for using .</p>
     </div>

      {/* form */}
      
      <form className="p-[0.5rem] pt-6">
        <div className='flex'>
          <div className="relative z-0 mb-6 w-full group">
              <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
              <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">FIRST NAME</label>
          </div>
          <div className="relative z-0 mb-6 w-full group pl-[1rem]">
              <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
              <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">LAST NAME</label>
          </div>
        </div>
        <div className="relative z-0 mb-6 w-full group">
            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">EMAIL</label>
        </div>
        
        <div className="relative z-0 mb-6 w-full group">
            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[2rem]">MESSAGES</label>
        </div>
          <button type="submit" className="text-white bg-[#748F99] font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message</button>
          <p className='bg-[#fbe3bf] p-[5px] mt-[9px] rounded-tr-xl rounded-br-xl'>This section is under development</p>
      </form>
    </div>
  )
}

export default Contact