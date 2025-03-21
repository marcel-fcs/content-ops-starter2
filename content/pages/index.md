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
    subtitle: ''
    text: >
      <h2><span style="color:#0c0b7e"><nobr>Fliegerclub</nobr><nobr>Schönebeck
      e.V.</nobr><br/></span></h2>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/>


      <br/>


      <span style="color:#0c0b7e"><nobr>Schon immer davon geträumt Pilot zu
      werden?</nobr>

      <br/><nobr>Mit uns kann Ihr Traum wahr werden!</nobr></span>
    actions:
      - label: Hier geht's zu Deinem FLug
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
          - pt-8
          - pl-0
          - pb-28
          - pr-60
        justifyContent: flex-start
        margin:
          - ml-0
          - mt-0
          - mb-7
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
      opacity: 75
      url: /images/GEPO1789.JPG
  - type: FeaturedItemsSection
    title:
      type: TitleBlock
      text: Aktuelles
      color: text-dark
      styles:
        self:
          textAlign: center
    items:
      - type: FeaturedItem
        title: ''
        subtitle: ''
        text: "### Sie erreichen den Flugplatz telefonisch unter 03928/400647. Das Telefon ist aber nicht immer besetzt. Bei dringenden Nachrichten sprechen sie bitte auf die Sprachbox. Danke!\_\n\n### Mitteilung an die Gäste des FCS:\n\n### Momentan sind leider keine Rundflüge mit unserem Motorsegler möglich. Sollten Sie bereits einen Gutschein dafür erworben haben, melden Sie sich gerne bei uns, über einen passenden Ersatz kann dann gemeinsam gesprochen werden. Vielen Dank für Ihr Verständnis!\n\n"
        image:
          type: ImageBlock
          altText: Faux Fur Throw
          elementId: ''
          styles:
            self:
              borderRadius: medium
              padding:
                - pt-0
                - pl-0
                - pb-0
                - pr-0
        actions: []
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pl-6
              - pb-6
              - pr-6
            textAlign: left
            borderColor: border-neutralAlt
            borderWidth: 2
            borderRadius: x-small
            flexDirection: row-reverse
            justifyContent: center
            borderStyle: dotted
    actions: []
    elementId: ''
    variant: big-list
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-0
          - pl-0
          - pb-0
          - pr-0
        justifyContent: center
      subtitle:
        textAlign: center
    badge:
      type: Badge
      label: '   '
      color: text-primary
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
    actions:
      - type: Button
        label: ältere Beiträge
        altText: ''
        url: /blog
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
    elementId: ''
    variant: three-col-grid
    colors: bg-light-fg-dark
    hoverEffect: thin-underline
    styles:
      self:
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
seo:
  metaTitle: Fliegerclub Schönebeck e.V.
  metaDescription: 'Segelflug, Motorflug und Modellflug'
  socialImage: /images/FLiegerclub_Logo_klein.jpg
  type: Seo
  addTitleSuffix: true
type: PageLayout
isDraft: false
---
