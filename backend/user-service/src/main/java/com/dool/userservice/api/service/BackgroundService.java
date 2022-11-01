package com.dool.userservice.api.service;


import com.dool.userservice.db.domain.Background;

public interface BackgroundService {
    public Iterable<Background> getAll();
    public Background get(Long id);
}
