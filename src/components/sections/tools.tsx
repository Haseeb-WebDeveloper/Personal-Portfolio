import { forProductIn, thingsICreate, toolsIUse } from '@/app/data/tools-data'
import React from 'react'

type Props = {}

const Tools = (props: Props) => {
  return (
    <section className='section section-my'>
        <div className='flex flex-col items-center justify-center gap-12'>
            <div className="text">
                <h2 className='text-5xl font-medium text-center max-w-lg mx-auto  leading-none'>You'll catch me doing 
                a combo of these:</h2>
            </div>
            <div className='flex flex-col md:flex-row gap-4 items-start'>
                {/* things I create */}
                <div className='w-[300px] rounded-md border-[1px] border-tertiary/5 flex flex-col justify-between bg-foreground/5'>
                    <div className='bg-chart-1 text-background font-medium rounded-t-md p-2'>
                        <h3 className='text-md text-center'>Things I Create</h3>
                    </div>
                    <ul className='flex flex-col'>
                        {
                            thingsICreate.map((tool) => (
                                <li key={tool.id} className={`py-2 px-3 text-foreground/90 hover:text-foreground ${tool.id !== thingsICreate.length ? 'border-b-[1px] border-primary/5' : ''} `}>
                                    <span className='text-xl '>{tool.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* for product in */}
                <div className='mt-4 w-[300px]  rounded-md border-[1px] border-tertiary/5 flex flex-col justify-between bg-foreground/5'>
                    <div className='bg-chart-2 text-background font-medium rounded-t-md p-2'>
                        <h3 className='text-md text-center'>For Product In</h3>
                    </div>
                    <ul className='flex flex-col'>
                        {
                            forProductIn.map((tool) => (
                                <li key={tool.id} className={`py-2 px-3  ${tool.id !== forProductIn.length ? 'border-b-[1px] border-primary/5 text-foreground/90 hover:text-foreground' : 'text-foreground/70'} `}>
                                <span className='text-xl '>{tool.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* tools i use */}
                <div className='w-[300px] rounded-md border-[1px] border-tertiary/5 flex flex-col justify-between bg-foreground/5'>
                    <div className='bg-chart-3 text-background font-medium rounded-t-md p-2'>
                        <h3 className='text-md text-center'>Tools I Use</h3>
                    </div>
                    <ul className='flex flex-col'>
                        {
                            toolsIUse.map((tool) => (
                                <li key={tool.id} className={`py-2 px-3 text-foreground/90 hover:text-foreground ${tool.id !== toolsIUse.length ? 'border-b-[1px] border-primary/5' : ''} `}>
                                    <span className='text-xl '>{tool.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tools