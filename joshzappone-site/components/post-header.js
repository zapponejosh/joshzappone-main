import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div>
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div>
        <CoverImage title={title} url={coverImage} />
      </div>
      <div>
        <div>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div>
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
