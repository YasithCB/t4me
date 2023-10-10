import React from "react";
import Meta from "../components/Meta";

function AboutUs() {
  return (
    <>
      <Meta title={"T4Me"} />
      <section class="container my-5 py-5 text-center">
        <div class="row">
          <div class="col-md-6">
            <h1>Welcome to T4Me Apparel & Printers</h1>
            <p>
              At <strong>T4Me</strong>, we are passionate about
              fashion and providing high-quality apparel for our customers. With
              years of experience in the industry, we have become a trusted name
              in fashion, offering a wide range of clothing options for men,
              women, and children.
            </p>

            <p>
              Our mission is to make you look and feel your best. We carefully
              curate our collections to ensure that you have access to the
              latest trends and timeless classics. Whether you're dressing up
              for a special occasion or looking for everyday essentials, we have
              something for everyone.
            </p>
          </div>
          <div class="col-md-6">
            <img
              src="https://www.digitalcommerce360.com/wp-content/uploads/2020/08/Who-are-the-top-online-apparel-merchants-1024x493.jpg"
              alt="Our Store"
              class="img-fluid rounded p-5"
            />
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-12">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, <strong>T4Me</strong> has been a
              staple in the fashion industry. We started with a small boutique
              and a vision to bring the latest fashion trends to our community.
              Over the years, we have grown into a one-stop destination for
              fashion enthusiasts.
            </p>

            <p>
              Quality and customer satisfaction are our top priorities. We
              source our materials from reputable suppliers and pay attention to
              every detail to ensure that our garments are not only stylish but
              also comfortable and durable.
            </p>

            <p>
              Thank you for choosing <strong>T4Me</strong> as your
              fashion destination. We look forward to serving you and helping
              you express your unique style through our apparel.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
