import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Clients from "../components/clients"
import Featured from "../components/featured"
import BannerActions from "../components/banners/bannerActions"
import Services from "../components/services/services"
import Projects from "../components/projects"
import FormContact from "../components/forms/formContact"
import LinkedinFeed from "../components/linkedinFeed"

import FeaturedImg from "../images/featured-project.png"
import BannerImg from "../images/banner.png"

export default function index() {
  return (
    <Layout>
      <Hero />
      {/* clients removed until further notice */}
      {/* <Clients /> */}
      {/* <Featured
        heading="providing complete solutions for all your concrete forming needs."
        body="A cold day - but a great start to another ICONic year. This school expansion involved challenging site access and complex concrete geometries - but the versatility of steel-ply, designed and supplied by Icon Forming, rises to the occasion."
        img={FeaturedImg}
        date="January 1st, 2021"
      /> */}
      <LinkedinFeed />
      <BannerActions
        img={BannerImg}
        heading="ICON is an authorized distributor of Symons Forming Systems"
        toSecondary="#contact"
        buttonSecondary="contact us today"
      />
      <div id="about" />
      <Services />
      <BannerActions
        img={BannerImg}
        heading="ICON is proud to be an Authorized distributor of Symons forming Systems"
        body="For more than 100 years, the Symons brand has been a leader in concrete formwork. Known for durability, craftsmanship and strength - Symons branded products have been used on countless projects large and
                small."
        toSecondary="#contact"
        buttonSecondary="contact us today"
      />
      <div id="projects" />
      <Projects />
      <div id="contact">
        <FormContact />
      </div>
    </Layout>
  )
}
