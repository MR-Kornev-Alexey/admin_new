<template>
  <div
    id="demo"
    :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]"
  >
    <div class="demo">
      <div class="container">
        <div class="main-panel">
          <h1> Klever-Link  Dashboard </h1>
          <div class="main-panel__user">
            <div>Manager</div>
            <div><img src="demo/assets/img/avatar.jpg" alt="avatar"></div>
          </div>

        </div>

        <hr style="margin: 50px 0px; border: 1px solid #e3e3e3;">
        <router-view />
      </div>
      <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
      />
      <div
        v-if="isOnMobile && !collapsed"
        class="sidebar-overlay"
        @click="collapsed = true"
      />
    </div>
  </div>
</template>

<script>
const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.4); margin: 20px;">`
}

export default {
  name: 'App',
  data () {
    return {
      menu: [
        {
          header: true,
          title: 'Klever Link',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Панель управления',
          icon: 'fas fa-fw fa-tachometer-alt'
        },
        {
          href: '/page',
          title: 'База',
          icon: 'fa fa-list-ul',
          child: [
            {
              href: '/base',
              title: 'База линков',
              icon: 'fa fa-file-alt'
            },
            {
              href: '/sorting',
              title: 'Сортировка',
              icon: 'fa fa-file-alt'
            },
            {
              href: '/delete',
              title: 'Удаление',
              icon: 'fa fa-file-alt'
            }
          ]
        },
        {
          href: '/users',
          title: 'Пользователи',
          icon: 'fas fa-users'
        },
        {
          href: '/top100',
          title: 'TOP100',
          icon: 'fas fa-american-sign-language-interpreting'
        },
        {
          header: true,
          title: 'Статистика',
          hiddenOnCollapse: true
        },
       {
          component: separator
        },
        {
          href: '/chart',
          title: 'Графики',
          icon: 'far fa-chart-bar',
          badge: {
            text: 'В работе',
            class: 'vsm--badge_default'
          }
        },
        {
          header: true,
          title: 'Example',
          hiddenOnCollapse: true
        },
        {
          href: '/disabled',
          title: 'Временно',
          icon: 'fa fa-lock',
          disabled: true,
          badge: {
            text: 'В работе',
            class: 'vsm--badge_default'
          }
        },
      ],
      collapsed: false,
      themes: [
        {
          name: 'White theme',
          input: 'white-theme'
        }
      ],
      selectedTheme: 'white-theme',
      isOnMobile: false
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onToggleCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item) {
      console.log('onItemClick')
      // console.log(event)
      // console.log(item)
    },
    onResize () {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true
        this.collapsed = true
      } else {
        this.isOnMobile = false
        this.collapsed = false
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  background-color: #f2f4f7;
  color: #565656;
}

#demo {
  padding-left: 350px;
  transition: 0.3s ease;
}
#demo.collapsed {
  padding-left: 50px;
}
#demo.onmobile {
  padding-left: 50px;
}

.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}

.demo {
  padding: 10px 50px 50px;
}

.container {
  max-width: 900px;
 }

pre {
  font-family: Consolas, monospace;
  color: #000;
  background: #fff;
  border-radius: 2px;
  padding: 15px;
  line-height: 1.5;
  overflow: auto;
}
.main-panel{
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__user {
    display: flex;
    align-items: center;
    div img {
      width: 60px;
      height: 60px;
      margin: 0 10px 0  20px;
    }
  }
}
</style>
