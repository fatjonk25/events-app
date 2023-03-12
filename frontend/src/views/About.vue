<template>
  <div class="about d-row ">
    <div class="about-section table-hover col-md-6 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      <h1 class="align-self-center"><i class="fas fa-info-circle"></i>About Us</h1>
      <p >
        We are an events management company that specializes in planning and
        organizing a wide range of events, from corporate conferences to private
        parties. With years of experience in the industry, we have a proven
        track record of delivering successful events that meet our clients'
        goals and exceed their expectations.
      </p>
    </div><br/>

    <div class="services-section col-md-6 li-none shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      <h2><i class="fas fa-cogs"></i> Our Services</h2>

      <ul>
        <li>Event planning and coordination</li>
        <li>Venue selection and booking</li>
        <li>Catering and beverage services</li>
        <li>Audio and visual equipment rental</li>
        <li>Entertainment booking and coordination</li>
        <li>Transportation and logistics planning</li>
        <li>On-site event management and staffing</li>
      </ul>
      <h2><i class="fas fa-users"></i> Our Team</h2>
      <p>
        We have a dedicated team of event professionals who are passionate about
        creating memorable experiences for our clients and their guests. Our
        team includes event planners, coordinators, designers, and managers, all
        with unique skills and expertise in their respective areas. Together, we
        work seamlessly to ensure that every aspect of your event is executed
        flawlessly.
      </p>
    </div>
    <div class="contact-section col-md-6  li-none shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      <h2><i class="fas fa-envelope"></i> Contact Us</h2>
      <p>
        If you're interested in learning more about our services or would like
        to discuss your upcoming event, please contact us at:
      </p>
      <ul>
        <li>Phone: 555-1234</li>
        <li>Email: info@myeventcompany.com</li>
        <li>Address: 123 Main Street, Suite 100, Anytown, USA</li>
      </ul>
    </div>
  </div>
</template>
<script scoped>
export default {
  name: "about-view",
};
</script>
<style scoped>
.about{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
ul{
  list-style: none;
}





</style>
