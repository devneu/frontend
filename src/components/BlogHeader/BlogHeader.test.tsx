import { render } from '@testing-library/react';
import BlogHeader from './BlogHeader';
import { BlogHeaderProps } from './BlogHeader'
import renderer from 'react-test-renderer';
// const setUp = (props: BlogHeaderProps) => render(<BlogHeader {...props} />);
// const title = "Blog Title";
// const subtitle = "Blog Subtitle";

// describe("should render BlogHeader Component", () => {
//    let component: any;
//    beforeEach(() => {
//       component = setUp({ title: title, subtitle: subtitle });
//    })
//    it("should contain title with text from props", () => {
//       const componentTitle = component.getByText(title);
//       expect(componentTitle.innerHTML).toBe(title);
//    })
//    it("should contain subtitle with text from props", () => {
//       const componentTitle = component.getByText(subtitle);
//       expect(componentTitle.innerHTML).toBe(subtitle);
//    })
// })



describe('BlogHeader', () => {
   it('Should successfully render', () => {
      const wrapper = renderer
         .create(
            <BlogHeader title="Blog Title" subtitle="Blog Subtitle" />
         )
         .toJSON();
      expect(wrapper).toMatchSnapshot();
   });
});