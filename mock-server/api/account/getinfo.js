/**
 * 用户信息
 *
 * @url /account/getinfo
 * GET
 */
module.exports = {
  status: 1,
  data: {
    info: {
      token: '@string(32)',
      adminName: 'administrator'
    },
    menus: [
      {
        menuName: '控制台11',
        menuIcon: null,
        menuCode: 'home',
        menuUrl: null
      },
      {
        menuName: '系统管理',
        menuIcon: null,
        children: [
          {
            menuName: '管理员管理',
            menuIcon: null,
            children: [
              {
                menuName: '管理员列表',
                menuIcon: null,
                menuCode: 'system-admin-list',
                menuUrl: null
              }
            ]
          },
          {
            menuName: '角色列表',
            menuIcon: null,
            menuCode: 'system-role-list',
            menuUrl: null
          }
        ]
      }
    ],
    modules: [
      'home',
      'system-admin-list',
      'system-admin-create',
      'system-admin-edit',
      'system-role-create'
    ]
  }
}
