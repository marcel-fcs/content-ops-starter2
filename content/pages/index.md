---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      text: ''
      color: text-dark
      type: TitleBlock
      styles:
        self:
          fontWeight: 400
    subtitle: Entdecke mit uns eine neue Dimension!
    text: |
      Schon immer davon geträumt Pilot zu werden? 
      Mit uns kann Ihr Traum wahr werden!
    actions:
      - label: Hier geht's zu deinem Flug
        altText: ''
        url: /gaeste
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Link
    badge:
      label: ''
      color: text-light
      type: Badge
      styles:
        self:
          textAlign: center
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-44
          - pl-0
          - pb-48
          - pr-72
        justifyContent: flex-start
        margin:
          - ml-0
          - mt-0
          - mb-0
          - mr-0
      text:
        textAlign: left
      subtitle:
        fontWeight: 500
    backgroundImage:
      type: BackgroundImage
      altText: altText of the image
      backgroundSize: auto
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
      url: /images/GEPO1789.JPG
  - type: GenericSection
    title:
      type: TitleBlock
      text: Social Media Management
      color: text-dark
    subtitle: Increase your reach
    text: >
      A service that helps businesses to manage their social media accounts and
      posts.
    actions:
      - type: Button
        label: Get started
        url: /
        icon: arrowRight
        iconPosition: right
        style: secondary
      - type: Link
        label: See Tutorials
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
    media:
      type: ImageBlock
      url: /images/hero2.svg
      altText: Fun feature preview
    badge:
      type: Badge
      label: ''
      color: text-primary
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
  - type: RecentPostsSection
    title:
      type: TitleBlock
      text: Letzte Beiträge
      color: text-dark
      styles:
        self:
          textAlign: center
    recentCount: 3
    showThumbnail: true
    showExcerpt: true
    showDate: true
    showAuthor: true
    actions: []
    elementId: ''
    variant: three-col-grid
    colors: bg-light-fg-dark
    hoverEffect: thin-underline
    styles:
      self:
        justifyContent: center
  - type: FeaturedPostsSection
    title:
      type: TitleBlock
      text: Highlights
      color: text-dark
      styles:
        self:
          textAlign: center
    posts:
      - content/pages/blog/life-of-our-development-team.md
      - content/pages/blog/surround-yourself-with-right-people.md
      - content/pages/blog/Norbert-51-Jahre-Fluglehrer.md
    showThumbnail: true
    showExcerpt: true
    showDate: true
    showAuthor: true
    actions: []
    elementId: ''
    variant: three-col-grid
    colors: bg-light-fg-dark
    hoverEffect: thin-underline
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
  - type: DividerSection
    title: Divider
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-3
          - pl-3
          - pb-3
          - pr-3
  - subtitle: Impressionen
    images:
      - url: /images/Bild3.jpg
        altText: Empathy logo
        type: ImageBlock
      - url: /images/Astir.jpg
        altText: Wellster logo
        type: ImageBlock
      - url: /images/Feuerweher.jpg
        altText: Vise logo
        type: ImageBlock
      - url: /images/Bild2.jpg
        altText: Telus logo
        type: ImageBlock
      - type: ImageBlock
        url: /images/Twin.jpg
        altText: Image alt text placeholder
        elementId: ''
        styles:
          self:
            borderRadius: medium
      - type: ImageBlock
        url: /images/Winde.jpg
        altText: Image alt text placeholder
        elementId: ''
        styles:
          self:
            borderRadius: medium
      - type: ImageBlock
        url: /images/SKP.jpg
        altText: Image alt text placeholder
        elementId: ''
        styles:
          self:
            borderRadius: medium
    motion: move-to-left
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
        padding:
          - pt-5
          - pl-0
          - pb-5
          - pr-0
        margin:
          - mt-7
          - ml-0
          - mb-7
          - mr-0
      subtitle:
        textAlign: center
    type: ImageGallerySection
    backgroundImage:
      type: BackgroundImage
      altText: altText of the image
      backgroundSize: contain
      backgroundPosition: left-top
      backgroundRepeat: repeat
      opacity: 36
      url: /images/LS4-768x485.jpeg
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
  - type: CarouselSection
    items:
      - type: FeaturedItem
        title: Flugbetrieb
        tagline: ''
        subtitle: 'jeden Samstag von 10:00 - 18:00 Uhr'
        text: |
          zusätzlich an den gesetzlichen Feiertagen
        image:
          type: ImageBlock
          url: /images/icon-uhr.png
          altText: Featured item
          styles:
            self:
              borderRadius: medium
        actions: []
        colors: bg-dark-fg-light
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
    variant: tabs-nav
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
seo:
  metaTitle: Fliegerclub Schönebeck e.V.
  metaDescription: 'Segelflug, Motorflug und Modellflug'
  socialImage: /images/FLiegerclub_Logo_klein.jpg
  type: Seo
type: PageLayout
isDraft: false
---
