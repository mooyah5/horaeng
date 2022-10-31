package com.dool.userservice.api.service;


import com.dool.userservice.db.domain.Background;

public interface BackgroundService {
    public Iterable<Background> getBackgroundAll();
    public Background getBackground();
}
