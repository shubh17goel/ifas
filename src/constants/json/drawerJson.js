import { CommonImages } from '../images'

export const drawerJson = (navigation) => {
  return [{
    title: 'Talent Core',
    selected: false,
    icon: CommonImages.man,
    list: [
      {
        title: 'Head Count',
        navigate: () => {}
      },
      {
        title: 'Salary',
        navigate: () => {}
      },
      {
        title: 'Benefits',
        navigate: () => {}
      }]
  }, {
    title: 'Workforce Planning',
    icon: CommonImages.man,
    selected: false,
    list: [
      {
        title: 'Head Count',
        navigate: () => {}
      },
      {
        title: 'Salary',
        navigate: () => {}
      },
      {
        title: 'Benefits',
        navigate: () => {}
      }]
  },
  {
    title: 'Talent Management',
    icon: CommonImages.man,
    selected: false,
    list: [
      {
        title: 'Head Count',
        navigate: () => {}
      },
      {
        title: 'Salary',
        navigate: () => {}
      },
      {
        title: 'Benefits',
        navigate: () => {}
      }]
  },
  {
    title: 'Talent Engagement',
    icon: CommonImages.man,
    selected: false,
    list: [
      {
        title: 'Head Count',
        navigate: () => {}
      },
      {
        title: 'Salary',
        navigate: () => {}
      },
      {
        title: 'Benefits',
        navigate: () => {}
      }]
  },
  {
    navigate: () => {},
    icon: CommonImages.man,
    title: 'Documents',
    selected: false,
    list: null
  },
  {
    navigate: () => {},
    icon: CommonImages.man,
    title: 'People Analytics',
    selected: false,
    list: null
  }

  ]
}
