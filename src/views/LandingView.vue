<script setup>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
</script>

<template>
  <Navbar/>

  <section class="hero-section w-[85%] h-[500px] mx-auto flex items-center justify-evenly">
    <div class="left-panel w-1/3 h-[400px] flex flex-col justify-evenly">
      <h1 class="text-4xl w-full ">
        <span class="underline decoration-[#00ADB5]">Everything</span> you need to <span class="underline decoration-[#00ADB5]">start and run</span> your business
      </h1>

      <span>All your business needs in one place!</span>
  
      <RouterLink :to="{name: 'signup'}">
        <div class="start-btn border-2 cursor-pointer hover:bg-[#00ADB5] border-[#00ADB5] w-28 rounded-full text-sm h-11 flex items-center justify-evenly">
          Get Started
        </div>
      </RouterLink>
    </div>
    
    <div class="right-panel w-1/2 h-[500px] flex items-end justify-end">
      <img src="/src/assets/Imgs/growth.svg">
      <div class="info-card border-2 rounded-lg w-80 backdrop-blur-md absolute top-1/4 px-2 flex flex-col justify-evenly left-[55%] h-48">
        <h3 class="text-lg">The ideas that improve your products</h3>
        <span class="text-sm">Be among the first entrepreneures to make the change, to experience a better way.</span>
      
        <div class="flex -space-x-2">
          <img class="inline-block size-8 rounded-full ring-2 ring-[#EEEEEE]" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description">
          <img class="inline-block size-8 rounded-full ring-2 ring-[#EEEEEE]" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description">
          <img class="inline-block size-8 rounded-full ring-2 ring-[#EEEEEE]" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80" alt="Image Description">
        </div>
      </div>
    </div>
  </section>

  <div class="divider h-[1px] border border-[#393E46] w-[85%] mx-auto my-[3%]"></div>

  <section class="w-[85%] h-[500px] mx-auto flex items-center justify-evenly" id="about-section">
    <div class="left-panel w-[45%] h-[400px] ">
      <img src="/src/assets/Imgs/teamwork.svg">
    </div>
    <div class="right-panel w-[45%] h-[400px] flex flex-col items-center justify-evenly">
      <h1 class="text-3xl underline decoration-[#00ADB5]">About Us</h1>
      <span class="text-center">
        Welcome to our platform! We are a team of developers passionate about making the lives of businesses and entrepreneurs easier and better. Through our website, we've created a space where you can do all your work—collaborate, hold meetings, manage schedules, and more—all in one place. Our mission is to empower individuals and organizations to achieve their goals efficiently and effectively. Join us as we revolutionize the way businesses operate and thrive in today's dynamic world.
      </span>
    </div>
  </section>

  <div class="divider h-[1px] border border-[#393E46] w-[85%] mx-auto my-[3%]"></div>

  <section class="w-[85%] overflow-hidden h-[500px] mx-auto flex items-center justify-evenly" id="services-section">
    <h1 class="text-4xl absolute">Our Services</h1>

    <div class="service w-full h-[500px] mx-auto my-[3%] flex items-center justify-evenly bg-fuchsia-400">
      <img src="https://picsum.photos/545/500">
      <div class="right-panel w-[45%] h-full bg-fuchsia-900"></div>
    </div>
    
    <div class="service w-full h-[500px] mx-auto my-[3%] flex items-center justify-evenly bg-fuchsia-400">
      <img src="https://picsum.photos/545/500">
      <div class="right-panel w-[45%] h-full bg-fuchsia-900"></div>
    </div>
    
    <div class="service w-full h-[500px] mx-auto my-[3%] flex items-center justify-evenly bg-fuchsia-400">
      <img src="https://picsum.photos/545/500">
      <div class="right-panel w-[45%] h-full bg-fuchsia-900"></div>
    </div>
    
    <div class="service w-full h-[500px] mx-auto my-[3%] flex items-center justify-evenly bg-fuchsia-400">
      <img src="https://picsum.photos/545/500">
      <div class="right-panel w-[45%] h-full bg-fuchsia-900"></div>
    </div>
  </section>

  <div class="divider h-[1px] border border-[#393E46] w-[85%] mx-auto my-[3%]"></div>

  <section class="faq-section h-auto w-3/4 mx-auto flex flex-col items-center justify-center">
    <h1 class="text-4xl underline decoration-[#00ADB5]">Frequently Asked Questions</h1>

    <div class="accordian mt-10 w-[60%] h-auto overflow-hidden">
      <div class="qs text-md w-[100%] border-b-2 border-[#393E46] p-5 overflow-hidden flex flex-col items-center justify-evenly">
        <div class="w-[100%] flex items-center justify-between">
          <span class="hover:underline cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing elit?</span>
          <i class="fa-solid fa-caret-down cursor-pointer"></i>
        </div>
        <div class="ans w-[100%] mt-5 hidden text-sm">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facere recusandae cum impedit dignissimos vitae velit accusantium voluptatibus aut voluptate, vel autem, eveniet eius tempora. Rerum, amet quae corporis quis est eveniet cupiditate vero! Consequatur provident doloribus veniam aperiam, alias minima voluptate accusamus, impedit dolorem aut illum! Tenetur, velit obcaecati.</span>
        </div>
      </div>

      <div class="qs text-md w-[100%] border-b-2 border-[#393E46] p-5 overflow-hidden flex flex-col items-center justify-evenly">
        <div class="w-[100%] flex items-center justify-between">
          <span class="hover:underline cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing elit?</span>
          <i class="fa-solid fa-caret-down cursor-pointer"></i>
        </div>
        <div class="ans w-[100%] mt-5 hidden text-sm">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facere recusandae cum impedit dignissimos vitae velit accusantium voluptatibus aut voluptate, vel autem, eveniet eius tempora. Rerum, amet quae corporis quis est eveniet cupiditate vero! Consequatur provident doloribus veniam aperiam, alias minima voluptate accusamus, impedit dolorem aut illum! Tenetur, velit obcaecati.</span>
        </div>
      </div>

      <div class="qs text-md w-[100%] border-b-2 border-[#393E46] p-5 overflow-hidden flex flex-col items-center justify-evenly">
        <div class="w-[100%] flex items-center justify-between">
          <span class="hover:underline cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing elit?</span>
          <i class="fa-solid fa-caret-down cursor-pointer"></i>
        </div>
        <div class="ans w-[100%] mt-5 hidden text-sm">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facere recusandae cum impedit dignissimos vitae velit accusantium voluptatibus aut voluptate, vel autem, eveniet eius tempora. Rerum, amet quae corporis quis est eveniet cupiditate vero! Consequatur provident doloribus veniam aperiam, alias minima voluptate accusamus, impedit dolorem aut illum! Tenetur, velit obcaecati.</span>
        </div>
      </div>
    </div>
  </section>

  <div class="divider h-[1px] border border-[#393E46] w-[85%] mx-auto my-[3%]"></div>

  <section class="w-[85%] h-[500px] mx-auto flex items-center justify-evenly" id="contact-section">
    <div class="left-panel w-[45%] h-[400px] flex flex-col justify-evenly">
      <div>
        <h2 class="text-xl">Get in touch</h2>
        <span class="text-sm text-gray-200">Have a question? Fill out the form below and we'll get back to you as soon as possible.</span>
      </div>

      <img src="/src/assets/Imgs/comm.svg" class="absolute w-[20%] -z-50 blur-sm">

      <form class="w-full mt-6 border rounded-lg min-h-[80%] flex flex-col items-center justify-evenly">
        <div class="flex items-center justify-evenly w-full">
          <div class="">
            <label for="name">Name</label>
            <input type="text" name="name" placeholder="Enter your name" class="text-sm pl-2 outline-none w-[100%] text-black rounded h-9 mt-2">
          </div>

          <div>
            <label for="email">Email</label>
            <input type="text" name="email" placeholder="Enter your email"class="text-sm pl-2 outline-none w-[100%] text-black rounded h-9 mt-2">
          </div>
        </div>

        <div class="w-[90%]">
          <label for="msg">Message</label>
          <textarea type="text" name="msg" placeholder="Enter your message" class="outline-none	text-sm pl-2 pt-2 text-black w-[100%] rounded h-24 mt-2"></textarea>
        </div>

        <button type="submit" class="bg-[#00ADB5] w-32 h-9 rounded-lg">Submit</button>
      </form>
    </div>
    <div class="right-panel w-[30%] h-[300px] flex flex-col bg- justify-evenly">
      <div>
        <h3 class="font-bold text-lg">Contact Information</h3>
        <span class="text-sm text-gray-200">Get in touch with us for any inquiries or support</span>
      </div>

      <div>
        <div class="w-[42%] flex items-center justify-between"><i class="fa-solid fa-phone"></i>+91XXXXXXXXXX</div>
        <div class="w-[48%] flex items-center justify-between"><i class="fa-solid fa-envelope"></i>unset@email.com</div>
      </div>

      <div>
        <h3 class="font-bold text-lg">Follow Us</h3>
        <div class="flex w-[30%] items-center mt-2 space-x-10">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  </section>

  <Footer/>
</template>