const fs = require('fs')


const nameFiles = async (folder = 'mono')=> new Promise((resolve)=>{
  let resultMono = []

  fs.readdirSync(`${__dirname}/../src/assets/icons/${folder}`).map(file => {
  const name = file.replace('.tsx','')
  resultMono.push(name)
  });
  resolve(resultMono)
})

const writeFile = async (folder='mono', data, fileName= 'index.ts') => new Promise((resolve, reject)=>{
  fs.writeFile(`${__dirname}/../src/assets/icons/${folder}/${fileName}`, data, (err)=>{
    if(err)return reject('erro')
    resolve(`  - ${folder}`);
  });
})

const generateFiles = async (folder = 'mono', name= 'IconColor') => {
  let icons = await nameFiles(folder)
  icons = icons
          .filter(i=>!i.includes('story'))
          .filter(i=>!i.includes('index'))
          .filter(i=>!i.includes(name))

const indexFile = `import React from 'react'
import { SvgProps } from 'react-native-svg'
${icons.map(i=>`import { ${i} } from './${i}' `).join('\n')}

export type ${name}Options = "${icons.join('"| "')}"

export interface I${name} extends SvgProps{
  name: ${name}Options
  primary?: string
}


export const ${name} = ({ name, ...props }: I${name}) => {
  switch (name) {
    ${icons.map(i=>`
    case '${i}':
      return <${i} {...props} />
    `).join('\n')}

    default:
      return null
  }
  }
  `

  const createIndexFile = await writeFile(folder, indexFile,`${name}.tsx`)


  const storyFile = `
  import React from 'react'
  import { View } from 'react-native'
  import { Text } from '../../../../src/atomic/atoms/Text'
  import { ${name} } from './${name}'
  import { number } from '@storybook/addon-knobs'

  export default {
    title: 'Utilites/${name}',
  }

  export const normal = () => (
    <View style={{  flexDirection: 'row', flexWrap: 'wrap' }}>
      ${icons.map(i=>`<View style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>
      <${name}
        name='${i}'
        width={number('size', 150)}
        height={number('size', 150)}
      />
      <Text style={{ fontSize: number('size', 150) / 8 }}>${i}</Text>
    </View>`).join('\n')}
    </View>
  )
  `

  await writeFile(folder, storyFile,`${name}.story.tsx`)

  let exportFiles = `${icons.map(i=>`export * from './${i}'`).join('\n')}`
  exportFiles += `\n export { ${name} } from './${name}'`

  await writeFile(folder, exportFiles,`index.ts`)

  console.log(createIndexFile)

}

generateFiles('colors','IconColor')
generateFiles('mono','IconMono')
