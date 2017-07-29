export default {
  template: `
    <p>hello</p>
    <div>
      <h2>
        <small>world</small>
      </h2>
      <span>!</span>
    </div>`,
  tokens: [
    { type: 'TagOpen', val: '<p>' },
      { type: 'Value', val: 'hello' },
    { type: 'TagClose', val: '</p>' },

    { type: 'TagOpen', val: '<div>' },

      { type: 'TagOpen', val: '<h2>' },
        { type: 'TagOpen', val: '<small>' },
          { type: 'Value', val: 'world' },
        { type: 'TagClose', val: '</small>' },
      { type: 'TagClose', val: '</h2>' },

      { type: 'TagOpen', val: '<span>' },
        { type: 'Value', val: '!' },
      { type: 'TagClose', val: '</span>' },

    { type: 'TagClose', val: '</div>' }
  ],
  dom: {
    type: 'html',
    val: null,
    children: [
      {
        type: '<p>',
        val: 'hello',
        children: []
      },
      {
        type: '<div>',
        val: null,
        children: [
          {
            type: '<h2>',
            val: null,
            children: [
              {
                type: '<small>',
                val: 'world',
                children: []
              }
            ]
          },
          {
            type: '<span>',
            val: '!',
            children: []
          }
        ]
      }
    ]
  }
}
