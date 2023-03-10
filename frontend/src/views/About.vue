<template>
  <div class="about">
    <div class="about-section">
      <h1><i class="fas fa-info-circle"></i>About Us</h1>
      <p>
        We are an events management company that specializes in planning and
        organizing a wide range of events, from corporate conferences to private
        parties. With years of experience in the industry, we have a proven
        track record of delivering successful events that meet our clients'
        goals and exceed their expectations.
      </p>
    </div>
    <div class="services-section">
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
    <div class="contact-section">
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
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.about-section {
  width: 800px;
  background-color: #f5f5f5; /* Set a light background color */
  border-radius: 10px; /* Add rounded corners */
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1); /* Add a subtle drop shadow */
  padding: 30px; /* Add some space around the content */
  text-align: center; /* Center the text */
}

.about-section h1 {
  font-size: 2.5rem; /* Increase the font size of the heading */
  margin-bottom: 20px; /* Add some space below the heading */
}

.about-section p {
  font-size: 1.2rem; /* Decrease the font size of the paragraph */
  line-height: 1.5; /* Increase the line height for readability */
}
h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  margin-top: 30px;
  margin-bottom: 15px;
}

ul {
  margin-bottom: 30px;
}

li {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
}
.services-section {
  width: 800px;
  background-color: #f5f5f5; /* Set a light background color */
  border-radius: 10px; /* Add rounded corners */
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1); /* Add a subtle drop shadow */
  padding: 30px; /* Add some space around the content */
  text-align: center;
  margin-top: 50px;
}

.services-section h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.services-section ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.services-section ul li {
  margin-bottom: 10px;
  padding-left: 30px;
  position: relative;
  font-size: 16px;
}
.services-section ul li:before {
  content: "\2022";
  position: center;
  left: 0;
  color: #161616;
  font-size: 20px;
  line-height: 20px;
}
.services-section p {
  font-size: 18px;
  line-height: 1.5;
}
.contact-section {
  width: 800px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto;
  text-align: center;
  margin-top: 50px;
}

.contact-section h2 {
  margin-bottom: 10px;
}

.contact-section ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contact-section li {
  margin-bottom: 10px;
}
</style>
