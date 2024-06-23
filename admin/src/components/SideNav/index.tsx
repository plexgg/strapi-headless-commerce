import React from 'react'

import {
  SubNav,
  SubNavHeader,
  SubNavLink,
  SubNavSection,
  SubNavSections,
} from '@strapi/design-system'
import { Apps } from '@strapi/icons'
import pluginId from '../../pluginId'
import { LINKS, type ILink } from '../../utils/links'

type SideNavItemProps = {
  isSubSectionChild?: boolean
} & ILink

const SideNavItem = ({
  label,
  icon,
  to,
  active,
  isSubSectionChild,
}: SideNavItemProps) => {
  return (
    <SubNavLink
      to={`/plugins/${pluginId}${to}`}
      active={active}
      icon={icon}
      key={label}
      isSubSectionChild={isSubSectionChild}
    >
      {label}
    </SubNavLink>
  )
}

const SideNav = () => {
  return (
    <SubNav ariaLabel="Settings sub nav">
      <SubNavHeader label="E-commerce" />
      <SubNavSections>
        <SubNavLink to={`/plugins/${pluginId}`} withBullet icon={<Apps />}>
          Dashboard
        </SubNavLink>

        {LINKS.map((link, i) => {
          if (link.items) {
            return (
              <SubNavSections key={link.label}>
                <SubNavSection label={link.label}>
                  {link.items.map((item, x) => (
                    <SideNavItem
                      key={x}
                      label={item.label}
                      icon={item.icon}
                      to={item.to}
                      active={item.active}
                      isSubSectionChild
                    />
                  ))}
                </SubNavSection>
              </SubNavSections>
            )
          }

          return (
            <SideNavItem
              key={i}
              label={link.label}
              icon={link.icon}
              to={link.to}
              active={link.active}
            />
          )
        })}
      </SubNavSections>
    </SubNav>
  )
}

export default SideNav
