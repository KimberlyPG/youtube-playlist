import { render, screen } from "@testing-library/react";
import Video from "./Video";
import 'jest-styled-components';

const item = {
    id: 'a', 
    title: 'video.snippet.title',
    image: 'video.snippet.thumbnails.high.url'
}

describe('Video', () => {
    it('should render Video container', () => {
        render(<Video video={item} />);

        expect(screen.getByTestId("video_container")).toBeInTheDocument();
    })

    it('should render Video player', () => {
        render(<Video video={item} />);

        expect(screen.getByTestId("video_player")).toBeInTheDocument();
    })

    it('should render Video link', () => {
        render(<Video video={item} />);

        expect(screen.getByTestId("video_link")).toBeInTheDocument();
    })

    it('should render Video img', () => {
        render(<Video video={item} />);

        expect(screen.getByTestId("video_img")).toBeInTheDocument();
    })

    it('should render Video icon', () => {
        render(<Video video={item} />);

        expect(screen.getByTestId("video_icon")).toBeInTheDocument();
    })

    it('should render Video title', () => {
        render(<Video video={item} />);

        expect(screen.getByTestId("video_title")).toBeInTheDocument();
    })
})

