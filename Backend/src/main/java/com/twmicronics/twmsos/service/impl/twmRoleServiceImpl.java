package com.twmicronics.twmsos.service.impl;

import com.twmicronics.twmsos.dao.ItwmRoleDao;
import com.twmicronics.twmsos.entities.twmRole;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmRoleService;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author paulinlenasaein
 */
@Service
@Transactional
public class twmRoleServiceImpl implements ItwmRoleService {
    
    @Autowired
    private ItwmRoleDao roleDao;
    
    @Override
    public twmRole createOne(twmRole role) throws DataAccessException {
        return roleDao.save(role);
    }

    @Override
    public twmRole findOne(String roleName) throws DataAccessException {
        return roleDao.findByRoleName(roleName);
    }

    @Override
    public void deleteOne(String roleName) throws DataAccessException {
        twmRole role = roleDao.findByRoleName(roleName);
        if (role != null) {
            roleDao.delete(role);
        } else {
            throw new WebApplicationException("Role innexistant", Response.Status.NO_CONTENT);
        }
    }

    @Override
    public twmRole updateOne(twmRole role) throws DataAccessException {
        return roleDao.save(role);
    }

    @Override
    public Page<twmRole> findAll(int from, int to) throws DataAccessException {
        return roleDao.findAll(PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "roleName")));
    }

    @Override
    public twmRole findOneByRoleName(String roleName) throws DataAccessException {
        return roleDao.findByRoleName(roleName);
    }

}
