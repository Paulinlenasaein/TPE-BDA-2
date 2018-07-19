package com.twmicronics.twmsos.service.impl;

import com.twmicronics.twmsos.dao.ItwmRequeteDao;
import com.twmicronics.twmsos.dao.ItwmUserDao;
import com.twmicronics.twmsos.entities.twmRequete;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmRequeteService;
import java.util.Date;
import java.util.Optional;
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
public class twmRequeteServiceImpl implements ItwmRequeteService {

    @Autowired
    private ItwmRequeteDao requeteDao;

    @Autowired
    private ItwmUserDao clientDao;

    @Override
    public twmRequete createOne(twmRequete requete) throws DataAccessException {
        return requeteDao.save(requete);
    }

    @Override
    public twmRequete findOne(Long id) throws DataAccessException {
        Optional<twmRequete> req = requeteDao.findById(id);
        twmRequete requete = req.isPresent() ? req.get() : null;
        return requete;
    }

    @Override
    public void deleteOne(Long id) throws DataAccessException {
        twmRequete req = requeteDao.getOne(id);
        if (req != null) {
            requeteDao.delete(req);
        } else {
            throw new WebApplicationException("Message innexistant", Response.Status.NO_CONTENT);
        }
    }

    @Override
    public twmRequete updateOne(twmRequete requete) throws DataAccessException {
        return requeteDao.save(requete);
    }

    @Override
    public Page<twmRequete> findAll(int from, int to) throws DataAccessException {
        return requeteDao.findAll(PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "dateEnvoi")));
    }

    @Override
    public Page<twmRequete> findOneByClient(String user, int from, int to) throws DataAccessException {
        return requeteDao.findByClient(clientDao.findByUsername(user), PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "dateEnvoi")));
    }

    @Override
    public Page<twmRequete> findOneByAdmin(String admin, int from, int to) throws DataAccessException {
        return requeteDao.findByClient(clientDao.findByUsername(admin), PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "dateEnvoi")));
    }

    @Override
    public Page<twmRequete> findAllByDateEnvoi(Date dateEnvoi, int from, int to) throws DataAccessException {
        return requeteDao.findByDateEnvoi(dateEnvoi, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "id")));
    }

    @Override
    public Page<twmRequete> findAllByClientAndStatus(String user, int status, int from, int to) throws DataAccessException {
        return requeteDao.findByClientAndStatus(clientDao.findByUsername(user), status, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "dateEnvoi")));
    }

    @Override
    public Page<twmRequete> findAllByAdminAndStatus(String admin, int status, int from, int to) throws DataAccessException {
        return requeteDao.findByClientAndStatus(clientDao.findByUsername(admin), status, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "dateEnvoi")));
    }

    @Override
    public Page<twmRequete> findAllByStatus(int status, int from, int to) throws DataAccessException {
        return requeteDao.findByStatus(status, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "dateEnvoi")));
    }

}
