package com.dool.socialservice.api.service;

import com.dool.socialservice.api.request.CreateNoticeRequest;
import com.dool.socialservice.api.request.UpdateNoticeRequest;
import com.dool.socialservice.db.domain.Notice;

import java.util.List;

public interface NoticeService {
    public Notice getNotice(Long id);
    public List<Notice> getAllNotices();
    public Notice createNotice(CreateNoticeRequest request);
    public Notice updateNotice(UpdateNoticeRequest requset);
    public void deleteNotice(Long id);
}
