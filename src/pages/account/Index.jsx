import React, { PureComponent } from 'react'
import {
  Pane,
  Heading,
  Text,
  TabNavigation,
  SidebarTab,
  majorScale,
  defaultTheme,
  UserIcon,
  CameraIcon,
} from 'evergreen-ui'
import { Link, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import AccountShareX from './ShareX'
import AccountInvites from './Invites'
import AccountHome from './Home'

const mapStateToProps = (state) => ({
  pathname: state.router.location.pathname,
  profile: state.root.profile,
  loggedIn: state.root.loggedIn,
  realUser: state.root.realUser,
})

class AccountIndex extends PureComponent {
  render() {
    const { profile, loggedIn, pathname } = this.props
    return (
      <Pane>
        <Heading size={800}>Account Dashboard</Heading>
        <Text>Logged in as {profile.username}</Text>
        <Pane display="flex" flexDirection="row" width="100%">
          <Pane
            elevation={1}
            width={'20%'}
            height={80}
            padding={majorScale(2)}
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <UserIcon
              color={defaultTheme.colors.icon.info}
              size={majorScale(6)}
            />
            <Pane marginLeft={majorScale(1)}>
              <Text>{profile.id}</Text>
              <Heading size={100}>User ID</Heading>
            </Pane>
          </Pane>
          <Pane
            elevation={1}
            width={'20%'}
            height={80}
            padding={majorScale(2)}
            display="flex"
            flexDirection="row"
            alignItems="center"
            marginLeft={majorScale(6)}
          >
            <CameraIcon
              color={defaultTheme.colors.icon.success}
              size={majorScale(6)}
            />
            <Pane marginLeft={majorScale(1)}>
              <Text>{profile.imageCount.toString()}</Text>
              <Heading size={100}>Images Uploaded</Heading>
            </Pane>
          </Pane>
        </Pane>
        <Pane
          display="flex"
          flexDirection="row"
          width={'100%'}
          marginTop={majorScale(4)}
          marginLeft={majorScale(2)}
        >
          <TabNavigation width={'20%'}>
            <SidebarTab
              is={Link}
              to="/account"
              isSelected={pathname.match(/^\/account$/gi) && true}
            >
              Account
            </SidebarTab>
            <SidebarTab
              is={Link}
              to="/account/invites"
              isSelected={pathname.match(/^\/account\/invites$/gi) && true}
            >
              Invites
            </SidebarTab>
            <SidebarTab
              is={Link}
              to="/account/sharex"
              isSelected={pathname.match(/^\/account\/sharex$/gi) && true}
            >
              ShareX
            </SidebarTab>
          </TabNavigation>
          <Pane marginLeft={majorScale(4)} width={'100%'}>
            <Switch>
              <Route exact path="/account" component={AccountHome} />
              <Route exact path="/account/invites" component={AccountInvites} />
              <Route exact path="/account/sharex" component={AccountShareX} />
            </Switch>
          </Pane>
        </Pane>
      </Pane>
    )
  }
}

export default connect(mapStateToProps)(AccountIndex)