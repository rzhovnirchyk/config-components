import { type Config } from '@/store/config.store'

const exampleConfig: Config = {
  CustomerCare: {
    enabled: true,
    options: {
      title: 'Customer Care'
    },
    permissions: ['V3UserManager', 'V3UserManagerWrite'],
    children: {
      Search: {
        enabled: true,
        permissions: ['V3UserManager', 'V3UserManagerWrite'],
        options: {
          pageOrder: 0,
          title: 'Search Page Title'
        },
        children: {
          Search: {
            enabled: true,
            options: {}
          }
        }
      },
      User: {
        enabled: true,
        options: {
          pageOrder: 1,
          title: 'User Page'
        },
        children: {
          Details: {
            enabled: true,
            options: {
              componentOrder: 0,
              tiles: {
                Tile1: {
                  title: 'Details',
                  expanded: true,
                  fields: ['field1', 'field2', 'field3']
                },
                Tile2: {
                  title: 'Contact',
                  expanded: false,
                  fields: ['field4', 'field5']
                }
              }
            }
          },
          StateHistory: {
            enabled: true,
            options: {
              componentOrder: 1,
              stateOrder: 'asc'
            }
          },
          MessageHistory: {
            enabled: true,
            options: {
              // componentOrder: -1,
              displayColumns: ['Campaign Name', 'Message Sent', 'Message']
            }
          }
        }
      }
    }
  }
}

export default exampleConfig
