import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "./layout"
import { Actions } from "../layoutComponents"
import { AnchorSecondaryDark } from "../buttons"
import { Flex, List, Img, ImgUnclipped } from "./serviceItems"

import WhatWeDo from "../../images/services/what-we-do.png"
import Smart from "../../images/services/smart.png"
import Steel from "../../images/services/steel.png"
import Columns from "../../images/services/columns.png"
import FormworkColumns from "../../images/services/formwork-columns.png"
import PierCap from "../../images/services/pier-cap.png"
import BarrierWall from "../../images/services/barrier-wall.png"
import BridgeDeck from "../../images/services/bridge-deck.png"
import Shoring from "../../images/services/shoring.png"
import Wallform from "../../images/services/wallform.png"

const StyledLink = styled(props => <Link {...props} />)`
  color: var(--txt-dark);
`

const BrochureLink = () => {
  return (
    <Actions>
      <AnchorSecondaryDark
        href="../../../brochures/full-brochure.pdf"
        target="_popup"
      >
        product brochure
      </AnchorSecondaryDark>
    </Actions>
  )
}

export default function Services() {
  return (
    <>
      <Layout>
        <h2 className="title center">what we do</h2>
        <Flex>
          <div className="spacing">
            <p>
              ICON Forming Systems specializes in the{" "}
              <span className="bold">
                design, supply, and rental of steel forming and shoring systems
              </span>{" "}
              to the concrete construction industry. In addition, we also
              provide concrete accessory solutions for any project requirement.
            </p>
            <p>
              We combine products from some of the leading brands along with our
              own in-house design, manufacturing and project management
              expertise to enhance our customer’s overall project execution.{" "}
            </p>
            <p>
              We seek to make the ICON experience a truly collaborative process
              that puts the success of our customers’ projects first.
            </p>
          </div>
          <div>
            <StaticImage
              className="img"
              src={"../../images/services/what-we-do.png"}
              placeholder="blurred"
              alt="concrete forming ontario"
            />
          </div>
        </Flex>
      </Layout>

      <Layout>
        <div className="center spacing-lg">
          <h2 className="title">our mission</h2>
          <div className="spacing">
            <div>
              <StyledLink to="#smart">
                <p className="body--large">SMART</p>
              </StyledLink>
              <p className="italics body">"To save our customers time."</p>
            </div>
            <div>
              <StyledLink to="#steel">
                <p className="body--large">STEEL</p>
              </StyledLink>
              <p className="italics body">"To save our customers money."</p>
            </div>
            <div>
              <StyledLink to="#services">
                <p className="body--large">FORMWORK</p>
              </StyledLink>
              <p className="italics body">"To build ICONic structures."</p>
            </div>
          </div>
        </div>
      </Layout>

      <div id="smart"></div>
      <Layout>
        <h2 className="title center">smart</h2>
        <Flex>
          <div className="spacing-lg">
            <div className="spacing">
              <p>
                Our Design team works to fully understand the scope of work and
                determines the right system and solution that will maximize the
                efficiency of your workflow. We achieve this through:
              </p>
              <List>
                <li>
                  Collaborative design process that maximizes productivity and
                  minimize labour
                </li>
                <li>3D modeling and problem solving</li>
                <li>
                  Limited number of components, simple robust connection
                  hardware
                </li>
                <li>Clear, consistent communication</li>
                <li>Cost-effective pricing</li>
              </List>
            </div>
            <BrochureLink />
          </div>
          <div>
            <StaticImage
              className="imgUnclipped"
              src={"../../images/services/smart.png"}
              placeholder="blurred"
              alt="concrete forming ontario"
            />
          </div>
        </Flex>
      </Layout>

      <div id="steel"></div>
      <Layout>
        <h2 className="title center">steel</h2>
        <Flex>
          <div className="spacing-lg">
            <div className="spacing">
              <p>
                Only steel provides the strength, durability, and finish
                required on infrastructure projects large and small.
              </p>
            </div>
            <BrochureLink />
          </div>
          <div>
            <StaticImage
              className="img"
              src={"../../images/services/steel.png"}
              placeholder="blurred"
              alt="steel formwork ontario"
            />
          </div>
        </Flex>
      </Layout>

      <div id="services"></div>
      <Layout>
        <h2 className="title center">formwork</h2>
        <Flex>
          <div>
            <h2 className="body--large upper">columns</h2>
            <List>
              <li>
                Available to meet any metric or imperial diameter. Typically
                provided in 8’, 4’, 2’, and 1’ heights
              </li>
              <li>
                Standard rental diameters up to 96”. Metric and custom diameters
                available for purchase
              </li>
              <li>
                Complete system comes with standardized brace, walkaway, and
                lifting lug connection points. All connections utilize 3/4”
                bolts
              </li>
            </List>
            <BrochureLink />
          </div>
          <div>
            <StaticImage
              className="img"
              src={"../../images/services/columns.png"}
              placeholder="blurred"
              alt="concrete formwork ontario"
            />
          </div>
        </Flex>
      </Layout>

      <Layout>
        {/* <h2 className="title center">formwork</h2> */}
        <Flex>
          <div>
            <h2 className="body--large upper">custom steel forms</h2>
            <div className="spacing">
              <p>
                With the increasing complexity of modern day infrastructure
                projects, customization and bespoke solutions are increasingly
                the most economical.
              </p>
              <p>
                Icon Forming Systems expertise extends to the design and
                manufacture of custom steel formwork products that can suit any
                geometry or requirement, including:
              </p>
              <List>
                <li>Custom columns</li>
                <li>Flared caps</li>
                <li>Box girders/precast</li>
                <li>Self-spanning</li>
              </List>
            </div>
            <BrochureLink />
          </div>
          <div>
            <StaticImage
              className="img"
              src={"../../images/services/formwork-columns.png"}
              placeholder="blurred"
              alt="custom steel forms ontario"
            />
          </div>
        </Flex>
      </Layout>

      <Layout>
        {/* <h2 className="title center">formwork</h2> */}
        <Flex>
          <div>
            <h2 className="body--large upper">pier caps</h2>
            <div className="spacing">
              <p>
                ICON forming can design and supply numerous pier cap and
                substructure forming solutions.
              </p>
              <List>
                <li>Multi-column bents, hammer heads, straddle bents</li>
                <li>Self-supporting girder or dancefloor</li>
                <li>
                  Column hung, friction collar supported, or shored to the
                  ground
                </li>
              </List>
            </div>
            <BrochureLink />
          </div>
          <div>
            <StaticImage
              className="img"
              src={"../../images/services/pier-cap.png"}
              placeholder="blurred"
              alt="pier caps ontario"
            />
          </div>
        </Flex>
      </Layout>

      <Layout>
        {/* <h2 className="title center">formwork</h2> */}
        <Flex>
          <div className="spacing">
            <div>
              <h2 className="body--large upper">Median Barriers</h2>
              <div className="spacing">
                <p>
                  The ICON heavy duty barrier form can be provided tieless with
                  yoke or without. Cast-in-place and pre-cast. Profiles to meet
                  Ministry of Transportation or Department of Transportation
                  standards.
                </p>
                <p>Can be provided with overhang access carriage system.</p>
              </div>
            </div>
            <BrochureLink />
          </div>
          <div>
            <StaticImage
              className="img"
              src={"../../images/services/barrier-wall.png"}
              placeholder="blurred"
              alt="median barriers ontario"
            />
          </div>
        </Flex>
      </Layout>

      <Layout>
        {/* <h2 className="title center">formwork</h2> */}
        <Flex>
          <div>
            <h2 className="body--large upper">bridge deck</h2>
            <div className="spacing">
              <p>
                ICON forming offers a complete range of bridge overhang
                products. Due to varying girder types, bridge deck hangers are
                made to order on each project. We will review and calculate the
                type, size, and quantities of the hangers. Our bridge deck
                offering includes:
              </p>
              <List>
                <li>Overhand brackets</li>
                <li>Aluminum beams, walers</li>
                <li>Interior and exterior pres-steel hangers</li>
                <li>Coil rod hangers</li>
                <li>Coil rod, nuts, coil bolts</li>
              </List>
            </div>
            <BrochureLink />
          </div>
          <div>
            <StaticImage
              className="img"
              src={"../../images/services/bridge-deck.png"}
              placeholder="blurred"
              alt="bridge decks ontario"
            />
          </div>
        </Flex>
      </Layout>

      <Layout>
        {/* <h2 className="title center">formwork</h2> */}
        <Flex>
          <div>
            <h2 className="body--large upper">shoring</h2>
            <div className="spacing">
              <p>
                ICON forming can design and supply high capacity shoring systems
                in both steel and aluminum.
              </p>
              <List>
                <li>10K steel shoring</li>
                <li>16K/26K aluminum shoring</li>
                <li>Symons soldier beam</li>
                <li>Aluminum beams</li>
                <li>Scaffold tubing</li>
                <li>Access scaffolding</li>
              </List>
            </div>
            <BrochureLink />
          </div>
          <div>
            <StaticImage
              className="img"
              src={"../../images/services/shoring.png"}
              placeholder="blurred"
              alt="concrete shoring ontario"
            />
          </div>
        </Flex>
      </Layout>

      <Layout>
        {/* <h2 className="title center">formwork</h2> */}
        <Flex>
          <div>
            <h2 className="body--large upper">wallforms</h2>
            <div className="spacing">
              <p>
                ICON forming can design and supply various solutions for
                wallforming, incluing:
              </p>
              <List>
                <li>Handset</li>
                <li>Clamp systems</li>
                <li>Aluminum gangs, walers, and components</li>
                <li>Radius forms</li>
                <li>All steel craneset</li>
                <li>Forming accessories for timber forming</li>
              </List>
            </div>
            <BrochureLink />
          </div>
          <div>
            <StaticImage
              className="img"
              src={"../../images/services/wallform.png"}
              placeholder="blurred"
              alt="wallforms ontario"
            />
          </div>
        </Flex>
      </Layout>

      <Layout>
        {/* <h2 className="title center">formwork</h2> */}
        <Flex>
          <div>
            <h2 className="body--large upper">concrete accessories</h2>
            <div className="spacing">
              <p>
                ICON offers a full line of concrete accessories and chemicals to
                meet the need of any construction project including;
              </p>
              <List>
                <li>Rebar Supports</li>
                <li>Bracing</li>
                <li>Water Stop</li>
                <li>Stud Rail and Load Transfer</li>
                <li>Rebar Splicing</li>
                <li>Anchoring Systems</li>
                <li>Concrete Chemicals</li>
                <li>Forming Hardware</li>
                <li>Construction Equipment</li>
              </List>
            </div>
            <Actions>
              <AnchorSecondaryDark
                href="../../../brochures/concrete-accessories.pdf"
                target="_popup"
              >
                product brochure
              </AnchorSecondaryDark>
            </Actions>
          </div>
          <div>
            <StaticImage
              className="img"
              src={"../../images/services/concrete-accessories.jpg"}
              placeholder="blurred"
              alt="concrete accessories in ontario"
            />
          </div>
        </Flex>
      </Layout>
    </>
  )
}
