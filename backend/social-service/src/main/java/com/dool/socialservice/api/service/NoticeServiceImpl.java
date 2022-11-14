package com.dool.socialservice.api.service;

import com.dool.socialservice.api.request.CreateNoticeRequest;
import com.dool.socialservice.api.request.UpdateNoticeRequest;
import com.dool.socialservice.db.domain.Notice;
import com.dool.socialservice.db.repository.NoticeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class NoticeServiceImpl implements NoticeService {

    private final NoticeRepository noticeRepository;
    @Override
    public Notice getNotice(Long id) {
        return noticeRepository.get(id);
    }

    @Override
    public List<Notice> getAllNotices() {
        return noticeRepository.getAll();
    }

    @Override
    public Notice createNotice(CreateNoticeRequest request) {
        Notice notice = new Notice();
        notice.setTitle(request.getTitle());
        notice.setUserId(request.getUserId());
        notice.setContent(request.getContent());

        return noticeRepository.create(notice);
    }

    @Override
    public Notice updateNotice(UpdateNoticeRequest request) {
        Notice notice = noticeRepository.get(request.getId());

        if(notice !=null){
            notice.setContent(request.getContent());
            notice.setTitle(request.getTitle());
        }

        return notice;
    }

    @Override
    public void deleteNotice(Long id) {
        Notice notice = noticeRepository.get(id);
        noticeRepository.delete(notice);
    }
}
