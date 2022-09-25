import { ComponentStory, ComponentMeta } from '@storybook/react'
import Municipalities from './Municipalities'

const mockMunicipalityData: { id: string; average: number }[] = [
  {
    id: 'assens',
    average: 7.1
  },
  {
    id: 'billund',
    average: 6.9
  },
  {
    id: 'bornholm',
    average: 6.7
  },
  {
    id: 'esbjerg',
    average: 6.2
  },
  {
    id: 'frederikshavn',
    average: 6.0
  },
  {
    id: 'guldborgsund',
    average: 5.7
  },
  {
    id: 'haderslev',
    average: 6.4
  },
  {
    id: 'herning',
    average: 6.1
  },
  {
    id: 'hjørring',
    average: 6.3
  },
  {
    id: 'holbæk',
    average: 5.9
  },
  {
    id: 'holstebro',
    average: 6.4
  },
  {
    id: 'horsens',
    average: 5.8
  },
  {
    id: 'kolding',
    average: 5.9
  },
  {
    id: 'københavn',
    average: 6.0
  },
  {
    id: 'køge',
    average: 5.1
  },
  {
    id: 'lemvig',
    average: 6.2
  },
  {
    id: 'lyngby-taarbæk',
    average: 6.1
  },
  {
    id: 'norddjurs',
    average: 6.0
  },
  {
    id: 'odense',
    average: 5.8
  },
  {
    id: 'randers',
    average: 6.4
  },
  {
    id: 'ringkøbing-skjern',
    average: 6.3
  },
  {
    id: 'ringsted',
    average: 5.9
  },
  {
    id: 'roskilde',
    average: 5.9
  },
  {
    id: 'silkeborg',
    average: 5.9
  },
  {
    id: 'skanderborg',
    average: 5.7
  },
  {
    id: 'skive',
    average: 6.4
  },
  {
    id: 'struer',
    average: 5.7
  },
  {
    id: 'svendborg',
    average: 6.1
  },
  {
    id: 'sønderborg',
    average: 6.2
  },
  {
    id: 'thisted',
    average: 6.3
  },
  {
    id: 'tønder',
    average: 5.7
  },
  {
    id: 'varde',
    average: 6.6
  },
  {
    id: 'vejen',
    average: 6.2
  },
  {
    id: 'vejle',
    average: 6.2
  },
  {
    id: 'vesthimmerlands',
    average: 5.9
  },
  {
    id: 'viborg',
    average: 6.1
  },
  {
    id: 'aalborg',
    average: 6.3
  },
  {
    id: 'aarhus',
    average: 6.6
  }
]

export default {
  title: 'ReactDenmarkMap/Municipalities',
  component: Municipalities,
  argTypes: {
    customizeMunicipalities: {
      description:
        'A function that is invoked for every municipality and return a custom object or className.'
    }
  }
} as ComponentMeta<typeof Municipalities>

const Template: ComponentStory<typeof Municipalities> = (args) => <Municipalities {...args} />

export const Default = Template.bind({})
Default.args = {
  width: '700px',
  onClick: undefined // for whatever reason, Storybook automatically applies the onClick prop
}

export const WithCustomStyle = Template.bind({})
WithCustomStyle.args = {
  width: '650px',
  style: { backgroundColor: 'black', paddingTop: '20px', paddingBottom: '20px' },
  color: 'white'
}

export const WithCustomizeMunicipalities = Template.bind({})
WithCustomizeMunicipalities.args = {
  width: '700px',
  customizeAreas: (municipality) => {
    const result = mockMunicipalityData.find((item) => item.id === municipality.name)

    if (!result) return

    if (result.average > 6) {
      return {
        style: { fill: 'green' }
      }
    } else {
      return {
        style: { fill: 'red' }
      }
    }
  },
  onClick: undefined
}

export const WithCustomTooltip = Template.bind({})
WithCustomTooltip.args = {
  width: '700px',
  customizeAreas: (municipality) => {
    const result = mockMunicipalityData.find((item) => item.id === municipality.name)

    if (!result) return

    return {
      style: {
        fill: '#17407a'
      }
    }
  },
  customTooltip: (municipality) => {
    const result = mockMunicipalityData.find((item) => item.id === municipality.name)

    return (
      <div
        style={{
          color: 'white',
          backgroundColor: '#101e2b',
          borderRadius: '4px',
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
          padding: '6px 12px'
        }}
      >
        <p style={{ fontWeight: 'bold', margin: '0px' }}>{municipality.display_name}</p>
        <p style={{ margin: '2px 0 0' }}>Average: {result?.average ? result.average : 'N/A'}</p>
      </div>
    )
  },
  onClick: undefined
}

export const WithoutTooltip = Template.bind({})
WithoutTooltip.args = {
  width: '700px',
  showTooltip: false,
  onClick: undefined
}

export const NonHoverable = Template.bind({})
NonHoverable.args = {
  width: '700px',
  hoverable: false,
  showTooltip: false,
  onClick: undefined
}

export const Clickable = Template.bind({})
Clickable.args = {
  width: '700px',
  hoverable: false,
  clickable: true,
  showTooltip: false
}
