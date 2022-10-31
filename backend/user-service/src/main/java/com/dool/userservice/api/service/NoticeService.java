package com.dool.userservice.api.service;

import com.dool.userservice.db.domain.Notice;

public interface NoticeService {
    public Notice getNotice();
    public Notice getAllNotices();
    public Notice updateNotice();
    public void deleteNotice();
}
