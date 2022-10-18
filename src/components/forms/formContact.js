import React from "react"

import { Section, Container, Flex } from "../layoutComponents"
import { Label, Input, TextArea, Submit } from "./formItems"
import ContactInfo from "../contactInfo"

export default function FormContact() {
  return (
    <Section>
      <Container className="spacing-lg">
        <div>
          <p className="body italics">Have questions? Need a quote?</p>
          <h2 className="title">send us a message</h2>
        </div>
        <Flex className="spacing-lg">
          {/* flex item 1 */}
          <div>
            <form
              name="contact"
              className="spacing"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <div className="spacing-sm">
                <Label htmlFor="name">* Name:</Label>
                <Input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="spacing-sm">
                <Label htmlFor="email">* Email:</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="spacing-sm">
                <Label htmlFor="phone">* Phone:</Label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="spacing-sm">
                <Label htmlFor="subject">Subject:</Label>
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="spacing-sm">
                <Label htmlFor="msg">* Message:</Label>
                <TextArea
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="10"
                  placeholder="How can we help?"
                  required
                />
              </div>
              <Submit type="submit" id="submit" value="submit" />
            </form>
          </div>
          {/* flex item 2 */}
          <ContactInfo />
        </Flex>
      </Container>
    </Section>
  )
}
