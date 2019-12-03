import React, { Component } from 'react';
import { Player } from 'video-react';
import '../../styles/scss/video-react.scss';
import { Table,Tag } from 'antd';

class ResourcesComponent extends Component{

    render() {

        const columns = [
            {
                title: 'Sr. No.',
                dataIndex: 'index',
              },
              {
                title: 'Description',
                dataIndex: 'desc'
              },
              {
                title: 'Tags',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                  <span>
                    {tags.map(tag => {
                      let color = tag.length > 5 ? 'geekblue' : 'green';
                      if (tag === 'loser') {
                        color = 'volcano';
                      }
                      return (
                        <Tag color={color} key={tag}>
                          {tag.toUpperCase()}
                        </Tag>
                      );
                    })}
                  </span>
                ),
              },
              {
                title: 'Video',
                key : 'src',
                dataIndex: 'src',
                width: '30%',
                render: src => (
                    <Player src={src}/>
                )
              }
        ];

        const data = [
            {
              index: '1',
              desc: 'John Brown',
              src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
              tags: ['nice', 'developer'],
            },
            {
                index: '2',
                desc: 'Bunny Movie',
                src: 'https://media.w3.org/2010/05/bunny/movie.mp4',
                tags: ['nice', 'developer'],
            },
            {
                index: '3',
                desc: 'John Brown',
                src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
                tags: ['nice', 'developer'],
            },
            {
                index: '4',
                desc: 'Bunny Movie',
                src: 'https://media.w3.org/2010/05/bunny/movie.mp4',
                tags: ['nice', 'developer'],
            },
            {
                index: '5',
                desc: 'John Brown',
                src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
                tags: ['nice', 'developer'],
            },
            {
                index: '6',
                desc: 'Bunny Movie',
                src: 'https://media.w3.org/2010/05/bunny/movie.mp4',
                tags: ['nice', 'developer'],
            },
            {
                index: '7',
                desc: 'John Brown',
                src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
                tags: ['nice', 'developer'],
            },
            {
                index: '8',
                desc: 'John Brown',
                src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
                tags: ['nice', 'developer'],
            },
            {
                index: '9',
                desc: 'John Brown',
                src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
                tags: ['nice', 'developer'],
            },
            {
                index: '10',
                desc: 'John Brown',
                src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
                tags: ['nice', 'developer'],
            },
            {
                index: '11',
                desc: 'John Brown',
                src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
                tags: ['nice', 'developer'],
            },
            {
                index: '12',
                desc: 'John Brown',
                src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
                tags: ['nice', 'developer'],
            }
        ]

        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}

export default ResourcesComponent;