import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  return (

      <aside className="sidebar">
        <div style={{color: '#1A1B1C', fontSize: 35, fontFamily: 'Source Sans Pro', fontWeight: '700', wordWrap: 'break-word',textAlign:'center',marginTop:'45px'}}>Logo</div>
     {/* <div className="ul-container">
     <ul id='list'>
     <li id='property'>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 3L1 11.4L2.21 12.99L4 11.62V21H20V11.62L21.79 12.98L23 11.4L12 3ZM18 19H6V10.1L12 5.52L18 10.1V19ZM9 14C9 14.1978 8.94135 14.3911 8.83147 14.5556C8.72159 14.72 8.56541 14.8482 8.38268 14.9239C8.19996 14.9996 7.99889 15.0194 7.80491 14.9808C7.61093 14.9422 7.43275 14.847 7.29289 14.7071C7.15304 14.5673 7.0578 14.3891 7.01921 14.1951C6.98063 14.0011 7.00043 13.8 7.07612 13.6173C7.15181 13.4346 7.27998 13.2784 7.44443 13.1685C7.60888 13.0586 7.80222 13 8 13C8.26522 13 8.51957 13.1054 8.70711 13.2929C8.89464 13.4804 9 13.7348 9 14ZM12 13C12.1978 13 12.3911 13.0586 12.5556 13.1685C12.72 13.2784 12.8482 13.4346 12.9239 13.6173C12.9996 13.8 13.0194 14.0011 12.9808 14.1951C12.9422 14.3891 12.847 14.5673 12.7071 14.7071C12.5673 14.847 12.3891 14.9422 12.1951 14.9808C12.0011 15.0194 11.8 14.9996 11.6173 14.9239C11.4346 14.8482 11.2784 14.72 11.1685 14.5556C11.0586 14.3911 11 14.1978 11 14C11 13.7348 11.1054 13.4804 11.2929 13.2929C11.4804 13.1054 11.7348 13 12 13ZM15 14C15 13.8022 15.0586 13.6089 15.1685 13.4444C15.2784 13.28 15.4346 13.1518 15.6173 13.0761C15.8 13.0004 16.0011 12.9806 16.1951 13.0192C16.3891 13.0578 16.5673 13.153 16.7071 13.2929C16.847 13.4327 16.9422 13.6109 16.9808 13.8049C17.0194 13.9989 16.9996 14.2 16.9239 14.3827C16.8482 14.5654 16.72 14.7216 16.5556 14.8315C16.3911 14.9414 16.1978 15 16 15C15.7348 15 15.4804 14.8946 15.2929 14.7071C15.1054 14.5196 15 14.2652 15 14Z" fill="#2289FF"/>
</svg>Property</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 22C12.5299 21.9984 13.0377 21.7872 13.4125 21.4125C13.7872 21.0377 13.9984 20.5299 14 20H10C10.0016 20.5299 10.2128 21.0377 10.5875 21.4125C10.9623 21.7872 11.4701 21.9984 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.60218 13.342 3.22064 13.0607 2.93934C12.7794 2.65804 12.3978 2.5 12 2.5C11.6022 2.5 11.2206 2.65804 10.9393 2.93934C10.658 3.22064 10.5 3.60218 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z" fill="#AAAAAA"/>
</svg>Assistance</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M14.667 6.66699V14.12H10L16 20.12L22 14.12H17.333V6.66699H14.667ZM8 18.667C8 20.7887 8.84285 22.8236 10.3431 24.3238C11.8434 25.8241 13.8783 26.667 16 26.667C18.1217 26.667 20.1566 25.8241 21.6569 24.3238C23.1571 22.8236 24 20.7887 24 18.667H21.333C21.333 20.0814 20.7711 21.4379 19.771 22.438C18.7709 23.4381 17.4144 24 16 24C14.5856 24 13.2291 23.4381 12.229 22.438C11.2289 21.4379 10.667 20.0814 10.667 18.667H8Z" fill="#AAAAAA"/>
</svg>Received Interest</li>
          <li><span id='icon'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M14.99 19.8V10.254H10.324L16.324 4.254L22.324 10.254H17.657V19.801L14.99 19.8ZM8 18.667C8 20.7887 8.84285 22.8236 10.3431 24.3239C11.8434 25.8241 13.8783 26.667 16 26.667C18.1217 26.667 20.1566 25.8241 21.6569 24.3239C23.1571 22.8236 24 20.7887 24 18.667H21.333C21.333 20.0814 20.7711 21.4379 19.771 22.438C18.7709 23.4381 17.4144 24 16 24C14.5856 24 13.2291 23.4381 12.229 22.438C11.2289 21.4379 10.667 20.0814 10.667 18.667H8Z" fill="#AAAAAA"/>
</svg></span>Sent Interest</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
  <path d="M12 2.43701C13.8387 2.4309 15.6419 2.9438 17.2021 3.91674C18.7624 4.88968 20.0164 6.28317 20.82 7.93701C20.0115 9.58701 18.7563 10.9771 17.1972 11.9494C15.638 12.9216 13.8374 13.4371 12 13.4371C10.1626 13.4371 8.36195 12.9216 6.80282 11.9494C5.24368 10.9771 3.98853 9.58701 3.18 7.93701C3.98362 6.28317 5.23763 4.88968 6.79788 3.91674C8.35813 2.9438 10.1613 2.4309 12 2.43701ZM12 0.437012C9.62547 0.438426 7.30636 1.15456 5.34446 2.49222C3.38256 3.82988 1.86874 5.72711 1 7.93701C1.86767 10.1476 3.38125 12.0455 5.3434 13.3832C7.30555 14.7209 9.62523 15.4364 12 15.4364C14.3748 15.4364 16.6945 14.7209 18.6566 13.3832C20.6187 12.0455 22.1323 10.1476 23 7.93701C22.1313 5.72711 20.6174 3.82988 18.6555 2.49222C16.6936 1.15456 14.3745 0.438426 12 0.437012Z" fill="#AAAAAA"/>
  <path d="M12 10C13.1046 10 14 9.10458 14 8.00002C14 6.89545 13.1046 6.00002 12 6.00002C10.8954 6.00002 10 6.89545 10 8.00002C10 9.10458 10.8954 10 12 10Z" fill="#AAAAAA"/>
</svg>Property Views</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21.41 11.41L12.58 2.58C12.205 2.20808 11.6982 1.99958 11.17 2H4.00001C3.47006 2.00158 2.96227 2.21281 2.58754 2.58754C2.21281 2.96227 2.00159 3.47005 2.00001 4V11.17C1.99924 11.4325 2.05104 11.6925 2.15237 11.9347C2.25371 12.1769 2.40251 12.3963 2.59001 12.58L11.42 21.41C11.6058 21.596 11.8263 21.7435 12.0691 21.8441C12.3119 21.9448 12.5722 21.9966 12.835 21.9966C13.0978 21.9966 13.3581 21.9448 13.6009 21.8441C13.8437 21.7435 14.0643 21.596 14.25 21.41L21.42 14.24C21.6053 14.0536 21.752 13.8325 21.8518 13.5893C21.9516 13.3462 22.0025 13.0858 22.0016 12.8229C22.0007 12.5601 21.9479 12.3 21.8464 12.0576C21.7449 11.8151 21.5966 11.5951 21.41 11.41ZM12.83 20L4.00001 11.17V4H11.17L20 12.83L12.83 20Z" fill="#AAAAAA"/>
  <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#AAAAAA"/>
</svg>Tariff Plan</li>
        </ul>
     </div>  */}




<div id='sidebar-conatiner'><span style={{color: '#2289FF', fontSize: 22, fontFamily: 'Source Sans Pro', fontWeight: '400', wordWrap: 'break-word',position:'relative'}}><span id='house_icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" id='house_icon'>
  <path d="M12 3L1 11.4L2.21 12.99L4 11.62V21H20V11.62L21.79 12.98L23 11.4L12 3ZM18 19H6V10.1L12 5.52L18 10.1V19ZM9 14C9 14.1978 8.94135 14.3911 8.83147 14.5556C8.72159 14.72 8.56541 14.8482 8.38268 14.9239C8.19996 14.9996 7.99889 15.0194 7.80491 14.9808C7.61093 14.9422 7.43275 14.847 7.29289 14.7071C7.15304 14.5673 7.0578 14.3891 7.01921 14.1951C6.98063 14.0011 7.00043 13.8001 7.07612 13.6173C7.15181 13.4346 7.27998 13.2784 7.44443 13.1685C7.60888 13.0587 7.80222 13 8 13C8.26522 13 8.51957 13.1054 8.70711 13.2929C8.89464 13.4804 9 13.7348 9 14ZM12 13C12.1978 13 12.3911 13.0587 12.5556 13.1685C12.72 13.2784 12.8482 13.4346 12.9239 13.6173C12.9996 13.8001 13.0194 14.0011 12.9808 14.1951C12.9422 14.3891 12.847 14.5673 12.7071 14.7071C12.5673 14.847 12.3891 14.9422 12.1951 14.9808C12.0011 15.0194 11.8 14.9996 11.6173 14.9239C11.4346 14.8482 11.2784 14.72 11.1685 14.5556C11.0586 14.3911 11 14.1978 11 14C11 13.7348 11.1054 13.4804 11.2929 13.2929C11.4804 13.1054 11.7348 13 12 13ZM15 14C15 13.8022 15.0586 13.6089 15.1685 13.4444C15.2784 13.28 15.4346 13.1518 15.6173 13.0761C15.8 13.0004 16.0011 12.9806 16.1951 13.0192C16.3891 13.0578 16.5673 13.153 16.7071 13.2929C16.847 13.4328 16.9422 13.6109 16.9808 13.8049C17.0194 13.9989 16.9996 14.2 16.9239 14.3827C16.8482 14.5654 16.72 14.7216 16.5556 14.8315C16.3911 14.9414 16.1978 15 16 15C15.7348 15 15.4804 14.8947 15.2929 14.7071C15.1054 14.5196 15 14.2652 15 14Z" fill="#2289FF"/>
</svg></span>   Property<br/></span>
<span id='gray-sidebar-icon' style={{color:'#AAAAAA', fontSize: 22, fontFamily: 'Source Sans Pro', fontWeight: '400', wordWrap: 'break-word',position:'relative'}}>
<br/><span id='bell-icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 22C12.5299 21.9984 13.0377 21.7872 13.4125 21.4125C13.7872 21.0378 13.9984 20.53 14 20H10C10.0016 20.53 10.2128 21.0378 10.5875 21.4125C10.9623 21.7872 11.4701 21.9984 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.60218 13.342 3.22065 13.0607 2.93934C12.7794 2.65804 12.3978 2.5 12 2.5C11.6022 2.5 11.2206 2.65804 10.9393 2.93934C10.658 3.22065 10.5 3.60218 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52001 9.51 6.5 12 6.5C14.49 6.5 16 8.52001 16 11V17Z" fill="#AAAAAA"/>
</svg></span> Assistance
<br/>
<br/><span id='received-intrest'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M14.667 6.66699V14.12H10L16 20.12L22 14.12H17.333V6.66699H14.667ZM8 18.667C8 20.7887 8.84285 22.8236 10.3431 24.3238C11.8434 25.8241 13.8783 26.667 16 26.667C18.1217 26.667 20.1566 25.8241 21.6569 24.3238C23.1571 22.8236 24 20.7887 24 18.667H21.333C21.333 20.0814 20.7711 21.4379 19.771 22.438C18.7709 23.4381 17.4144 24 16 24C14.5856 24 13.2291 23.4381 12.229 22.438C11.2289 21.4379 10.667 20.0814 10.667 18.667H8Z" fill="#AAAAAA"/>
</svg></span> Received Interest
<br/>
<br/><span id='sent-intrest'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M14.99 19.8V10.254H10.324L16.324 4.254L22.324 10.254H17.657V19.801L14.99 19.8ZM8 18.667C8 20.7887 8.84285 22.8236 10.3431 24.3238C11.8434 25.8241 13.8783 26.667 16 26.667C18.1217 26.667 20.1566 25.8241 21.6569 24.3238C23.1571 22.8236 24 20.7887 24 18.667H21.333C21.333 20.0814 20.7711 21.4379 19.771 22.438C18.7709 23.4381 17.4144 24 16 24C14.5856 24 13.2291 23.4381 12.229 22.438C11.2289 21.4379 10.667 20.0814 10.667 18.667H8Z" fill="#AAAAAA"/>
</svg></span>Sent Interest
<br/>
<br/><span id='visibility-black'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
  <path d="M12 2.43701C13.8387 2.4309 15.6419 2.9438 17.2021 3.91674C18.7624 4.88968 20.0164 6.28317 20.82 7.93701C20.0115 9.58701 18.7563 10.9771 17.1972 11.9494C15.638 12.9216 13.8374 13.4371 12 13.4371C10.1626 13.4371 8.36195 12.9216 6.80282 11.9494C5.24368 10.9771 3.98853 9.58701 3.18 7.93701C3.98362 6.28317 5.23763 4.88968 6.79788 3.91674C8.35813 2.9438 10.1613 2.4309 12 2.43701ZM12 0.437012C9.62547 0.438426 7.30636 1.15456 5.34446 2.49222C3.38256 3.82988 1.86874 5.72711 1 7.93701C1.86767 10.1476 3.38125 12.0455 5.3434 13.3832C7.30555 14.7209 9.62523 15.4364 12 15.4364C14.3748 15.4364 16.6945 14.7209 18.6566 13.3832C20.6187 12.0455 22.1323 10.1476 23 7.93701C22.1313 5.72711 20.6174 3.82988 18.6555 2.49222C16.6936 1.15456 14.3745 0.438426 12 0.437012Z" fill="#AAAAAA"/>
  <path d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z" fill="#AAAAAA"/>
</svg></span>Property Views
<br/>
<br/><span id='sell'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21.41 11.4101L12.58 2.58024C12.205 2.20832 11.6981 1.99982 11.17 2.00024H4.00001C3.47006 2.00183 2.96227 2.21305 2.58754 2.58777C2.21281 2.9625 2.00159 3.47028 2.00001 4.00022V11.1701C1.99924 11.4326 2.05104 11.6926 2.15237 11.9348C2.25371 12.177 2.40251 12.3964 2.59001 12.5801L11.42 21.41C11.6058 21.596 11.8263 21.7435 12.0691 21.8441C12.3119 21.9448 12.5722 21.9966 12.835 21.9966C13.0978 21.9966 13.3581 21.9448 13.6009 21.8441C13.8437 21.7435 14.0643 21.596 14.25 21.41L21.42 14.2401C21.6053 14.0537 21.752 13.8326 21.8518 13.5895C21.9516 13.3463 22.0025 13.0859 22.0016 12.823C22.0006 12.5602 21.9479 12.3001 21.8464 12.0577C21.7449 11.8153 21.5966 11.5952 21.41 11.4101ZM12.83 20L4.00001 11.1701V4.00022H11.17L20 12.8301L12.83 20Z" fill="#AAAAAA"/>
  <path d="M6.5 8C7.32842 8 8 7.32841 8 6.49997C8 5.67153 7.32842 4.99994 6.5 4.99994C5.67157 4.99994 5 5.67153 5 6.49997C5 7.32841 5.67157 8 6.5 8Z" fill="#AAAAAA"/>
</svg></span>Tariff  Plan</span></div>

      </aside>

  )
}

export default Sidebar