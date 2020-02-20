import { fakeVideos } from '../fakeDB';

//렌더함수 인자 중 첫번째는 템플릿이고, 두번째는 템플릿에 추가할 정보가 담긴 객체.
export const home = (req, res) => {
  res.render('home', { pageTitle: 'Home', fakeVideos });
};
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render('search', { pageTitle: 'Search', searchingBy });
};
export const videos = (req, res) => res.render('videos', { pageTitle: 'Videos' });
export const upload = (req, res) => res.render('upload', { pageTitle: 'Upload' });
export const videoDetail = (req, res) => res.render('videoDetail', { pageTitle: 'Video Detail' });
export const editVideo = (req, res) => res.render('editVideo', { pageTitle: 'Edit Video' });
export const deleteVideo = (req, res) => res.render('deleteVideo', { pageTitle: 'Delete Video' });
