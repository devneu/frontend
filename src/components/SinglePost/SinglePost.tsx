import React from 'react';
import './SinglePost.scss';
import { PageHeader, Typography, Tag, Image } from 'antd';

const { Title, Text, Paragraph } = Typography;

const SinglePost = () => (
  <>
    <PageHeader>
      <Title>Welcome to Blog Post!</Title>
      <Text type="secondary" italic>
        Posted on January 1, 2021 by Start Bootstrap
      </Text>
      <div className="block-tags-post">
        <Tag className="tag-post" color="#6c757d">
          Web Design
        </Tag>
        <Tag className="tag-post" color="#6c757d">
          Freebies
        </Tag>
      </div>
    </PageHeader>
    <Image
      height={400}
      src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"
      className="img-post"
    />
    <Paragraph className="text-post">
      Science is an enterprise that should be cherished as an activity of the free human mind.
      Because it transforms who we are, how we live, and it gives us an understanding of our place
      in the universe.
    </Paragraph>
    <Paragraph className="text-post">
      The universe is large and old, and the ingredients for life as we know it are everywhere, so
      there&lsquo;s no reason to think that Earth would be unique in that regard. Whether of not the
      life became intelligent is a different question, and we&lsquo;ll see if we find that.
    </Paragraph>
    <Paragraph className="text-post">
      If you get asteroids about a kilometer in size, those are large enough and carry enough energy
      into our system to disrupt transportation, communication, the food chains, and that can be a
      really bad day on Earth.
    </Paragraph>

    <Title>I have odd cosmic thoughts every day</Title>
    <Paragraph className="text-post">
      For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I
      realized I could hold them to myself or share them with people who might be interested.
    </Paragraph>
    <Paragraph className="text-post">
      Venus has a runaway greenhouse effect. I kind of want to know what happened there because
      we&lsquo;re twirling knobs here on Earth without knowing the consequences of it. Mars once had
      running water. It&lsquo;s bone dry today. Something bad happened there as well.
    </Paragraph>
  </>
);

export default SinglePost;
