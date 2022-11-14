package com.dool.userservice.api.service;

import com.dool.userservice.db.domain.Background;
import com.dool.userservice.db.repository.BackgroundRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class BackgroundServiceImpl implements BackgroundService{
    private final BackgroundRepository backgroundRepository;

    @Override
    public Iterable<Background> getAll() {
        return backgroundRepository.getAll();
    }

    @Override
    public Background get(Long id) {
        return backgroundRepository.get(id);
    }
}
