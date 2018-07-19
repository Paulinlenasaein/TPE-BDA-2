package com.twmicronics.twmsos.service.impl;

import com.twmicronics.twmsos.dao.ItwmPanProdDao;
import com.twmicronics.twmsos.dao.ItwmPanierDao;
import com.twmicronics.twmsos.entities.twmPanProd;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmPanProdService;
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
public class twmPanProdServiceImpl implements ItwmPanProdService {
    
    @Autowired
    private ItwmPanProdDao panprodDao;
    
    @Autowired
    private ItwmPanierDao panierDao;
    
    @Override
    public twmPanProd createOne(twmPanProd panprod) throws DataAccessException {
        return panprodDao.save(panprod);
    }

    @Override
    public twmPanProd findOne(Long id) throws DataAccessException {
        Optional<twmPanProd> pp = panprodDao.findById(id);
        twmPanProd panprod = pp.isPresent() ? pp.get() : null;
        return panprod;
    }

    @Override
    public void deleteOne(Long id) throws DataAccessException {
        twmPanProd pp = panprodDao.getOne(id);
        if (pp != null) {
            panprodDao.delete(pp);
        } else {
            throw new WebApplicationException("Élément recherché introuvable", Response.Status.NO_CONTENT);
        }
    }

    @Override
    public twmPanProd updateOne(twmPanProd panprod) throws DataAccessException {
        return panprodDao.save(panprod);
    }

    @Override
    public Page<twmPanProd> findAll(int from, int to) throws DataAccessException {
        return panprodDao.findAll(PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "id")));
    }

    @Override
    public Page<twmPanProd> findAllByPanier(String indexPan, int from, int to) throws DataAccessException {
        return panprodDao.findByPanier(panierDao.findByIndexPan(indexPan),PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "id")));
    }
}
