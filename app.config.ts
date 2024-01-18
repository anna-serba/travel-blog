export default defineAppConfig({
  alpine: {
    title: 'Счастье в путешествиях',
    description: 'Я делюсь своим опытом и знаниями, чтобы помочь вам открыть для себя мир и сделать ваше путешествие ярким и запоминающимся.',

    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },

    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'alpine' // alt of the logo
      }
    },

    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: '' // string that will be displayed in the footer (leave empty or delete to disable)
    },

    socials: {
      twitter: '',
      instagram: '',
      linkedin: {
        icon: 'uil:vk',
        label: 'VK',
        href: 'https://vk.com/happinessintravel'
      }
    },

    form: {
      successMessage: 'Message sent. Thank you!'
    },

    backToTop: {
      text: 'К началу'
    }
  }
})