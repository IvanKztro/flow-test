import type { SectionDefinition } from '$lib/types/section';
import { TriangleAlert } from 'lucide-svelte';
import HeroSection from './hero-section.svelte';
import MediaObject from './templates/Announcement-Banners/MediaObject.svelte';
import ClientsSection from './templates/Clients-Sections/ClientsSection.svelte';
import CookiesBanner from './templates/Cookie-Banners/CookiesBanner.svelte';
import ImageGaleries from './templates/Galleries/ImageGaleries.svelte';
import FaqSection from './templates/FAQ-Sections/FAQSection.svelte';
import IconSection from './templates/icon-sections/IconSection.svelte';


export const sectionConfigs: SectionDefinition[] = [
    {
        type: 'hero',
        name: 'Hero Banner',
        component: HeroSection,
        settings: [
            {
                type: 'text',
                id: 'heading',
                label: 'Heading',
                default: 'Welcome to our store'
            },
            {
                type: 'textarea',
                id: 'description',
                label: 'Description',
                default: 'Find the perfect items for your lifestyle'
            },
            {
                type: 'image',
                id: 'backgroundImage',
                label: 'Background Image'
            },
            {
                type: 'select',
                id: 'textAlignment',
                label: 'Text Alignment',
                default: 'center',
                options: [
                    { label: 'Left', value: 'left' },
                    { label: 'Center', value: 'center' },
                    { label: 'Right', value: 'right' }
                ]
            }
        ],
        blocks: [
            {
                type: 'button',
                name: 'Button',
                limit: 2,
                settings: [
                    {
                        type: 'text',
                        id: 'text',
                        label: 'Button Text',
                        default: 'Shop Now'
                    },
                    {
                        type: 'text',
                        id: 'link',
                        label: 'Button Link',
                        default: '/collections/all'
                    },
                    {
                        type: 'select',
                        id: 'style',
                        label: 'Button Style',
                        default: 'primary',
                        options: [
                            { label: 'Primary', value: 'primary' },
                            { label: 'Secondary', value: 'secondary' },
                            { label: 'Outline', value: 'outline' }
                        ]
                    }
                ]
            }
        ],
        presets: [
            {
                name: 'Default Hero',
                settings: {
                    heading: 'Welcome to our store',
                    description: 'Find the perfect items for your lifestyle',
                    textAlignment: 'center'
                },
                blocks: [
                    {
                        type: 'button',
                        settings: {
                            text: 'Shop Now',
                            link: '/collections/all',
                            style: 'primary'
                        }
                    }
                ]
            }
        ]
    },{
        name: 'icons section',
        type: 'section',
        component: IconSection,
        settings: [
            {
                type: 'text',
                id: 'id',
                label: 'label'
            },{
                type: 'text',
                id: 'title',
                label: 'title'
            },{
                type:'select',
                id:'iconPosition',
                label:'Icon Position',
                default:'top',
                options:[
                    {label:'Top',value:'top'},
                    {label:'Left',value:'left'}
                ]
            },{
                type:'select',
                id:'itemDesc',
                label:'Item Description alignment',
                default:'center',
                options:[
                    {label:'Center',value:'top'},
                    {label:'Left',value:'left'},
                    {label:'Right',value:'rigth'}
                ]
            }
        ]
    },{
        name: 'FAQ',
        type: 'faq',
        component: FaqSection,
        settings: [
            {
                type: 'checkbox',
                id: 'showIcon',
                label: 'Show Icon',
                default:false
            },{
                type:'text',
                id:'title',
                label:'Title',
                default:'You might be wondering...'
            },{
                type: 'text',
                id: 'subtitle',
                label: 'Subtitle'
            },{
                type:'select',
                id:'layout',
                label:'Layout',
                default:'y',
                options:[
                    {label:'Vertical',value:'y'},
                    {label:'Hero style',value:'hero'},
                ]
            },{
                type: 'select',
                id: 'itemsCol',
                label: 'Items col',
                default:'col-1',
                options:[
                    {label:'Col 1',value:'col-1'},
                    {label:'Col 2',value:'col-2'},
                ]
            }
        ]
    },{
        name: 'image galery',
        type: 'image galery',
        component: ImageGaleries,
        settings: [
            {
                type: 'select',
                id: 'width',
                label: 'Width',
                default:'md',
                options:[
                    {label:'Large',value:'lg'},
                    {label:'Medium',value:'md'},
                ]
            },{
                type:'checkbox',
                id:'isImageSquare',
                label:'Image Square Shape',
                default:true
            }
        ]
    },{
        name:'cookies banner',
        type:'cookies',
        component: CookiesBanner,
        settings:[
            {
                id:'showIcon',
                type:'checkbox',
                label:'Show Icon',
                default:false
            },{
                id:'range',
                type:'range',
                label:'Range',
                default:''
            },{
                type: 'text',
                id: 'title',
                label: 'Title',
                default:'We are using cookies to improve your experience!'
            },{
                type:'text',
                id:'description',
                label:'Description',
                default:'By clicking "Allow all", you agree to use of all cookies.'
            },{
                type:'checkbox',
                id:'inlineButtons',
                label:'Inline buttons',
                default:false
            },{
                type:'select',
                id:'padding',
                label:'Padding',
                default:'0',
                options:[
                    {label:'0',value:'0'},
                    {label:'2',value:'2'},
                    {label:'4',value:'4'},
                    {label:'6',value:'6'},
                    {label:'8',value:'8'},
                    {label:'10',value:'10'},
                    {label:'12',value:'12'},
                ]
            },{
                type:'text',
                id:'some',
                label:'Some',
            }
        ]
    },{
        name:'clients section',
        type:'layout',
        component: ClientsSection,
        settings:[{
            type:'text',
            id:'title',
            label:'Titulo',
            default: 'Trusted by Open Source, enterprise, and more than 99,000 of you'
        },{
            type: 'checkbox',
            id: 'patternbg',
            label: 'Pattern background',
            default:false
        },{
            type: 'checkbox',
            id: 'isCard',
            label: 'Cllient Card',
            default:false
        },{
            type: 'select',
            id: 'textAlign',
            label: 'Text Alignment',
            default:'text-left',
            options:[
                {label:'Center',value:'text-center sm:w-1/2 lg:w-1/3 w-2/3 mx-auto'},
                {label:'Left',value:'text-left'},
                {label:'Right',value:'text-right'},
            ]
        },{
            type: 'select',
            id: 'fontSize',
            label: 'Title Size',
            default:'lg',
            options:[
                {label:'Normal',value:'normal'},
                {label:'Big',value:'lg'},
                {label:'Small',value:'sm'},
            ]
        },{
            type: 'select',
            id: 'fontWeight',
            label: 'Title Weight',
            default:'semibold',
            options:[
                {label:'Normal',value:'normal'},
                {label:'Bold',value:'bold'},
                {label:'Semibold',value:'semibold'},
                {label:'Thin',value:'thin'},
            ]
        },{
            type:'select',
            id:'iconSize',
            label:'Icon Size',
            default:'normal',
            options:[
                {label:'Nomral',value:'normal'},
                {label:'Small',value:'small'},
            ]
        }]
    },{
        name: 'announcement banner',
        type: 'banner',
        component: MediaObject,
        settings: [{
            type: 'text',
            id: 'title',
            label: 'Title',
            default:'Get Started today xd'
        },{
            type:'text',
            id:'description',
            label:'Description',
            default:''
        },{
            type:'image',
            id: 'icon',
            label:'Icon',
            default: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fph-files.imgix.net%2Fb513e535-3d1f-44c7-8aa5-73cd0d3ba232.png%3Fauto%3Dformat&f=1&nofb=1&ipt=3a9a02145e1c8b30a3c12b62452fb14802bc5ef64ceaf39a876654581d0aaa74&ipo=images"
        },{
            type: 'select',
            id: 'justifyContent',
            label: 'Justify Content',
            default: 'justify-center',
            options: [
                { label: 'Left', value: 'justify-start' },
                { label: 'Center', value: 'justify-center' },
                { label: 'Right', value: 'justify-end' },
                { label: 'Justify', value: 'justify-between' },
            ]
        },{
            type: 'select',
            id: 'backgroundColor',
            label: 'Background Color',
            default: 'blue',
            options: [
                { label: 'Gray', value: 'gray' },
                { label: 'Blue', value: 'blue' },
                { label: 'Dark', value: 'dark' },
                { label: 'Gradient red-purple-blue', value: 'gradient-red-purple-blue' },
                { label: 'Blue Abstract', value: 'blue-abstract' },
                { label: 'Gradient Blue-Purple', value: 'gradient-blue-purple' },
            ]
        },{
            type:'select',
            id:'width',
            label:'Width',
            default:'lg',
            options:[
                { label:"Full",value:'full' },
                { label:"Large",value:'lg' },
            ]
        }],
        presets:[{
            name: 'Default banner',
            settings: {
                title:'title from section configs :)',
                justifyContent:'left'
            }
        }]
    }
];
