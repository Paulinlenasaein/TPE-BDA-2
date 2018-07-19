package com.twmicronics.twmsos.service.impl;

import com.twmicronics.twmsos.dao.ItwmPanierDao;
import com.twmicronics.twmsos.dao.ItwmUserDao;
import com.twmicronics.twmsos.entities.twmPanier;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmPanierService;
import java.util.Date;
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
public class twmPanierServiceImpl implements ItwmPanierService {

    @Autowired
    private ItwmPanierDao panierDao;

    @Autowired
    private ItwmUserDao clientDao;

    @Override
    public twmPanier createOne(twmPanier panier) throws DataAccessException {
        return panierDao.save(panier);
    }

    @Override
    public twmPanier findOne(String indexPan) throws DataAccessException {
        return panierDao.findByIndexPan(indexPan);
    }

    @Override
    public void deleteOne(String indexPan) throws DataAccessException {
        twmPanier pan = panierDao.findByIndexPan(indexPan);
        if (pan != null) {
            panierDao.delete(pan);
        } else {
            throw new WebApplicationException("Panier Inexistant", Response.Status.NO_CONTENT);
        }
    }

    @Override
    public twmPanier updateOne(twmPanier panier) throws DataAccessException {
        return panierDao.save(panier);
    }

    @Override
    public Page<twmPanier> findAll(int from, int to) throws DataAccessException {
        return panierDao.findAll(PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "indexPan")));
    }

    @Override
    public Page<twmPanier> findAllByClient(String client, int from, int to) throws DataAccessException {
       return panierDao.findByClient(clientDao.findByUsername(client), PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "indexPan")));
    }

    @Override
    public Page<twmPanier> findOneBySoldeTotal(Double solde, int from, int to) throws DataAccessException {
        return panierDao.findBySoldeTotal(solde, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "indexPan")));
    }

    @Override
    public Page<twmPanier> findAllByDateJour(Date dateJour, int from, int to) throws DataAccessException {
        return panierDao.findByDateJour(dateJour, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "indexPan")));
    }

    @Override
    public Page<twmPanier> findAllByAck(int ack, int from, int to) throws DataAccessException {
       return panierDao.findByAck(ack, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "indexPan")));
    }
}
